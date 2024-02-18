import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const billStore = createSlice(
    {
        name:'billStore',
        initialState:{
            billList:[]
        },
        reducers:{
            setBillList(state, action){
                state.billList = action.payload
            },
            addBillList(state, action){
                state.billList.push(action.payload)
            }
        }
    }
)

const {setBillList, addBillList} = billStore.actions
const fetchBillList = ()=>{
    return async (dispatch)=>{
        const res = await axios.get("http://localhost:8888/ka")
        dispatch(setBillList(res.data))
    }
}

const uploadBillList= (data)=>{
    return async(dispatch)=>{
        const res = await axios.post("http://localhost:8888/ka", data)
        dispatch(addBillList(res.data))
    }
}
export {fetchBillList,uploadBillList}

const reducer = billStore.reducer
export default reducer