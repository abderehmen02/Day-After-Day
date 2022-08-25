import React, { useState } from 'react'
import reactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './state/store'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
const MyApp:React.FC = () =>{
    return (
        <div>
            <Provider store={store} >
<App/>
            </Provider>
        </div>
        )
}
reactDom.render( <MyApp/> , document.getElementById('root') )
