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
        const res = await axios.get("https://my-json-server.typicode.com/rui030303/notepad_API/ka")
        dispatch(setBillList(res.data))
    }
}

const uploadBillList= (data)=>{
    return async(dispatch)=>{
        const res = await axios.post("https://my-json-server.typicode.com/rui030303/notepad_API/ka", data)
        dispatch(addBillList(res.data))
    }
}
export {fetchBillList,uploadBillList}

const reducer = billStore.reducer
export default reducer