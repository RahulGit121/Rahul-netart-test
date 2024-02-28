import React from 'react'
import './Mainpage.css';
import myimage from './asserts/1.png'
import myimage2 from './asserts/2.png'
import myLogo from './asserts/logo.png'
import img3 from './asserts/3.png'
import call from './asserts/call.png'
import fb from './asserts/fb.png'
import web from './asserts/web.png'


function Mainpage() {
    return (
        <div className='container'>
            <div className="logo">
                <img src={myLogo} alt="" />
            </div>
            <div className="container2">
                <div className="left">
                    <img src={myimage} alt="" />
                </div>
                <div className="right">
                    <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
                    <div className="text">
                         <ul> <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                           <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li></ul>
                    </div>
                    <img src={myimage2} alt="" />
                    <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>

                </div>
            </div>
            <p className='midText'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </p>
            <div className="section">
                <div className="img3">
                    <img src={img3} alt="" />
                </div>
                <p className='midText'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors

                </p>
                <div className='line'></div>
                <p className='midText'><strong>
                    C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
                </p>

                <p className='midText' id='belText'>
                    CHEMICALS & PROCESS <span className='diff'>|</span> POWER <span className='diff'>|</span> WATER & WASTE WATER <span className='diff'>|</span> OILS & GAS PHARMA <span className='diff'>|</span> SUGARS & DISTILLERIES <span className='diff'>|</span> PAPER & PULP <span className='diff'>|</span> MARINE & DEFENCE <span className='diff'>|</span> METAL & MINING <span className='diff'>|</span> FOOD & BEVERAGE <span className='diff'>|</span> PETROCHEMICAL & REFINERIES <span className='diff'>|</span> SOLAR <span className='diff'>|</span> BUILDING <span className='diff'>|</span> HVAC <span className='diff'>|</span> FIRE FIGHTING <span className='diff'>|</span> AGRICULTURE & RESIDENTIAL
                </p>
            </div>
            <div className="footer">
                <div className='data'>
                    <img src={call} alt="" />
                    <p>Toll free: <strong>1800 200 1234</strong></p>
                </div>
                <div className='data'>
                    <img src={fb} alt="" />
                    <p>www.facebook.com/cripumps</p>
                </div>
                <div className='data'>
                    <img src={web} alt="" />
                    <p>www.crigroups.com</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Mainpage
