import { Outlet } from "react-router-dom"
import {Button} from "antd-mobile"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchBillList } from "../../store/modules/billStore"

const Layout = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchBillList())
    },[dispatch])
    return <div>
        <Outlet></Outlet>
        
        this is a layout page
        <button>Click</button>
        <Button color="primary">click</Button>
    </div>
}
export default Layout