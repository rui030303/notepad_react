import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import Icon from '../../component/Icon'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '../../contants'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { uploadBillList } from '../../store/modules/billStore'
import { useDispatch } from 'react-redux'

const New = () => {
  const navigate = useNavigate()
  const [billType, setBillType] = useState('pay')
  const [money,setMoney] = useState(0)
  const [useFor,setUseFor] = useState('')
  const dispatch = useDispatch()
  const saveData = ()=>{
    const data = {
        type: billType,
        money: money,
        date: new Date(),
        useFor: useFor
    }
    dispatch(uploadBillList(data))
    console.log(data)
  }
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={billType==='pay' ? 'selected' : ''}
            onClick={()=>setBillType('pay')}
          >
            pay
          </Button>
          <Button
            className={billType==='income' ? 'selected' : ''}
            shape="rounded"
            onClick={()=>setBillType('income')}
          >
            income
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon name="calendar" className="icon" />
              <span className="text">{'今天'}</span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={(value)=>{setMoney(+value)}}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType==='pay'?'pay':'income'].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    <div
                      className={classNames(
                        'item',
                        ''
                      )}
                      key={item.type}
                      onClick={()=>{setUseFor(item.type)}}
                    >
                      <div className="icon">
                        <Icon name={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={()=>saveData()}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default New