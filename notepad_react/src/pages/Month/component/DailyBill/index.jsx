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
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">pay</span>
            <span className="money">{dayResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">income</span>
            <span className="money">{dayResult.income.toFixed(2)}</span>
          </div>
          <br />
          <div className="balance">
            <span className="type">balance</span>
            <span className="money">{dayResult.balance.toFixed(2)}</span>
          </div>
        </div>
        {/* 单日列表 */}
        <div className="billList">
          {billList.map(item => {
            return (
              <div className="bill" key={item.id}>
                <div className="detail">
                  <div className="billType">{item.useFor}</div>
                </div>
                <div className={classNames('money', item.type)}>
                  {item.money.toFixed(2)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default DailyBill