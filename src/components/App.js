import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import './App.css'
import Home from './Home/Home'

const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route path='/' exact component={Home}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;