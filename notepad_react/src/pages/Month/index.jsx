import { NavBar, DatePicker, Toast } from 'antd-mobile'
import { useEffect, useMemo, useState } from 'react'
import './index.scss'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _, { filter,reduce } from 'lodash'

const Month = () => {
    //get data
    const billList = useSelector(state=>state.billStore.billList)
    const monthGroup = useMemo(()=>{
        return _.groupBy(billList,(item)=>dayjs((item.date)).format('YYYY-MM'))
    },[billList])

 
    // time visible
    const now = new Date()
    const [dateVisible, setDateVisible] = useState(false)
    const [currentDate, setCurrentDate] = useState(()=>{return dayjs(now).format('YYYY-MM')})
    const [currentMonthList,setCurrentMonthList] = useState([])
    const onConfirm = (val)=>{
        setCurrentDate(val.toDateString())
        const currentMonthGroup = monthGroup[dayjs(val).format('YYYY-MM')]
        setCurrentMonthList(currentMonthGroup)
    }
    const monthResult = useMemo(()=>{
      //calculate
      if (currentMonthList){
      const income = currentMonthList.filter(item=>item.type === 'income').reduce((a,c)=>a+c.money, 0)
      const pay = currentMonthList.filter(item=>item.type === 'pay').reduce((a,c)=>a+c.money, 0)
      const balance = income + pay
      return {income, pay, balance}}
      else{return {income:0, pay:0, balance:0}}
    },[currentMonthList])


    useEffect(()=>{
      const nowDate = dayjs(now).format('YYYY-MM')
      monthGroup[nowDate]? setCurrentMonthList(monthGroup[nowDate]) : setCurrentMonthList([])
    },[monthGroup])

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        Monthly income and expenditure
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={()=>setDateVisible(!dateVisible)}>
            <span className="text">
              {dayjs(currentDate).format('YYYY-MM')}
            </span>
            <span className={dateVisible ? 'arrow' : 'arrow expand'}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">expend</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">income</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.balance.toFixed(2)}</span>
              <span className="type">balance</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            max={now}
            onClose={() => {
                setDateVisible(false)
              }}
            onConfirm={val => {
                onConfirm(val)
            }}
          />
        </div>
      </div>
    </div >
  )
}

export default Month