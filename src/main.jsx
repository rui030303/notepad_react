import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import router from './rooter/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.jsx'
import './theme.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
 </Provider>
)
