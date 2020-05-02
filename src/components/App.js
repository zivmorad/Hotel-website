import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import './App.css'
const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Navbar/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;