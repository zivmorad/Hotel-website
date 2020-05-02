import React from 'react';
import Showcase from '../Shwocase/Showcase';
import Info from '../Info/Info';
import Features from '../Features/Features';
import './Home.css';


const Home =()=>{
    return(
        <div>
            <Showcase/>
            <Info/>
            <Features/>
            <p className='rights'>Hotel BT &copy; 2020, All Rights Reserved</p>
        </div>
    )
}

export default Home;