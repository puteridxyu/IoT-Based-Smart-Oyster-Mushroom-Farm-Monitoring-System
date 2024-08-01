import React, { useState } from 'react';
import './graph.css'
import LineChart2 from '../../componets/lineChart/LineChart2';
import { GaugeHumidity, GaugeTemperature } from '../../componets/gauge/Gauge';
import {Link} from "react-router-dom"

import Sidebar from '../../componets/sidebar/Sidebar';
import Topbar from '../../componets/topbar/Topbar';
import { LineHumidity } from '../../componets/realtimeData/ApexChart';

export default function GraphHumidity() {

  const [activePage, setActivePage] = useState(null) ;

  function handleActive(event) {
    if (!event.target.classList.value.includes("active")) {
    event.target.classList.toggle('active') ;
    if (activePage)
        activePage.classList.remove("active") ;
    setActivePage(event.target) ;
    }
  } 

  return (
    <div>
      <Topbar className="topbar"/>
      <div className="container2">   
        <Sidebar className="sidebar"/>
        <div className='userg'>
          <div className = "userTitleContainerg">
            <h2 className = "userTitleg">Graph</h2>
            <div className='userAddButtong1'>

            <Link to="/graphHumidity" className="link" onClick={handleActive}>
            <button className='userAddButtong'>Humidity</button></Link>
            <p>&nbsp;</p>

            <Link to="/graphTemperature" className="link" onClick={handleActive}>
            <button className='userAddButtong'>Temperature</button></Link>
            <p>&nbsp;</p>

            <Link to="/graphCo2" className="link" onClick={handleActive}>
            <button className='userAddButtong'>Co2</button></Link>
            <p>&nbsp;</p>

            <Link to="/graphWaterLevel" className="link" onClick={handleActive}>
            <button className='userAddButtong'>Humidifier</button></Link>
            </div>
          </div>

          <div className='userContainerg'>
          <div className='userUpdateg'><LineHumidity/></div>
          <div className='userShowg'><GaugeHumidity/></div>

            
          </div>

        </div>
    </div></div>
  )
}

