import React from 'react';
import './analytic.css'
import Sidebar from '../../componets/sidebar/Sidebar';
import Topbar from '../../componets/topbar/Topbar';
import Forecast1 from '../../componets/forecast/Forecast1';
import Forecast2 from '../../componets/forecast/Forecast2';

export default function Analytic() {
  return (
    <div>
      <Topbar className="topbar"/>
      <div className="container2">   
        <Sidebar className="sidebar"/> 
        <div className='analytic'>
          <div className = "analyticTitleContainer">
            <h1 className = "analyticTitle"> Data Prediction</h1>
          </div>
          <div className='analyticContainer'>
              <div className='analyticShow'>
                <span className='analyticShowTitle'>Co2 Prediction Graph For Next 30-Days</span>
                  
                  <Forecast2/>
              </div>

              <  div className='analyticUpdate'>
                <span className='analyticShowTitle'>Co2 Historical Graph</span>
                <Forecast1/>
              </div>


            </div>
            </div></div></div>
  )
}

