import React from 'react'
import './Info.css'
import { Link } from 'react-router-dom'

const Info=()=>{
    return(
        <div className='info-form'>
            <div className='info-img'></div>
            <div className='info-content'>
                <h2><span className='text-primary'>The History</span> Of Our Hotel</h2>
                <p>text texttext texttext texttext texttext texttext texttexttext texttext texttext texttext texttext texttext texttext texttexttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext text</p>
                <Link className='about-page-link' to='/about'>Read More</Link>
            </div>
        </div>
    )
}

export default Info;