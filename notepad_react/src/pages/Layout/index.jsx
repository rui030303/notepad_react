import { Outlet, useNavigate} from "react-router-dom"
import {Button} from "antd-mobile"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchBillList } from "../../store/modules/billStore"
import { Badge, TabBar } from 'antd-mobile'
import './index.scss'

import {
    BillOutline,
    CalculatorOutline,
    AddCircleOutline
} from 'antd-mobile-icons'
import { Value } from "sass"
const tabs = [
    {
      key: '/month',
      title: 'Month',
      icon: <BillOutline />,
    },
    {
      key: '/new',
      title: 'Account',
      icon: <AddCircleOutline />,
    },
    {
      key: '/year',
      title: 'Year',
      icon: <CalculatorOutline />,
    },
  ]

const Layout = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchBillList())
    },[dispatch])
    const navigate = useNavigate()
    return (
    <div className="layout">
        <div className="top">
            <Outlet></Outlet>
        </div>
        <div className="bottom">
            <TabBar onChange={(path)=>{navigate(path)}}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
            </TabBar>
        </div>
    </div>
    )
}
export default Layout