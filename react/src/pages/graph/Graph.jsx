import React, { useState } from 'react';
import './graph.css'
import LineChart2 from '../../componets/lineChart/LineChart2';
import { GaugeHumidity, GaugeTemperature } from '../../componets/gauge/Gauge';
import {Link} from "react-router-dom"
import Sidebar from '../../componets/sidebar/Sidebar';
import Topbar from '../../componets/topbar/Topbar';

export default function Graph() {

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

              

             

                </div>
              </div>

              <div className='userContainerg'>
              <div className='userUpdateg'><LineChart2/></div>
              <div className='userShowg'>Gauge</div>

                
              </div>

            </div>
    </div></div>
  )
}

