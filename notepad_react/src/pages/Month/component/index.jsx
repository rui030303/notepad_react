import classNames from 'classnames'
import './index.scss'
import { useMemo } from 'react'

const DailyBill = ({date,billList}) => {
    //calculate
    const dayResult = useMemo(()=>{
        if (billList){
        const income = billList.filter(item=>item.type === 'income').reduce((a,c)=>a+c.money, 0)
        const pay = billList.filter(item=>item.type === 'pay').reduce((a,c)=>a+c.money, 0)
        const balance = income + pay
        return {income, pay, balance}}
        else {return {income:0, pay:0, balance:0}}
      },[billList])

  return (
    <div className={classNames('dailyBill')}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span className={classNames('arrow')}></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{dayResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{dayResult.balance.toFixed(2)}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DailyBill