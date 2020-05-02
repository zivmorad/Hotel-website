import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/contact' exact component={Contact}/>
                    <p className='rights'>Hotel BT &copy; 2020, All Rights Reserved</p>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;