import {configureStore} from '@reduxjs/toolkit'
import billreducer from './modules/billStore'

const store = configureStore({
    reducer:{
        billStore: billreducer
    }
})

export default store