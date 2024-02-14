import { NavBar, DatePicker, Toast } from 'antd-mobile'
import { useState } from 'react'
import './index.scss'
import dayjs from 'dayjs'

const Month = () => {
    // time visible
    const now = new Date()
    const [dateVisible, setDateVisible] = useState(false)
    const [currentDate, setCurrentDate] = useState(()=>{return dayjs(now).format('YYYY-MM')})
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
              <span className="money">{100}</span>
              <span className="type">expend</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">income</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
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
                Toast.show(val.toDateString())
                setCurrentDate(val.toDateString())
            }}
          />
        </div>
      </div>
    </div >
  )
}

export default Month