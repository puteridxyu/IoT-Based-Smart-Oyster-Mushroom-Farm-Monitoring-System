import React from 'react';
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FeaturedInfo } from "../../componets/featuredInfo/FeaturedInfo"
import { Location } from '../../componets/location/Location';
import { Alarm } from '../../componets/alarm/Alarm';
import { LineHumTemp } from '../../componets/realtimeData/ApexChart';
import { DailyReport } from '../../componets/ConditionStatus/DailyReport';
import LineChart1 from '../../componets/lineChart/LineChart1';
import Topbar from '../../componets/topbar/Topbar';
import Sidebar from '../../componets/sidebar/Sidebar';
import { GraphRealTimeWater } from '../../componets/realtimeData/GraphRealTime';


export default function Home2() {
  return (
    <div>
      <Topbar className="topbar"/>
      <div className="container2">   
        <Sidebar className="sidebar"/> 
        <div className="home1">
            <FeaturedInfo />
            
            
            

            <div className='middleHome'>
                <div className='graphHumTemp1'>
                  <br></br>
                  <h5 className="miniTitle1">Humidifier Water Level </h5>
                  <GraphRealTimeWater/>
                </div>
                <  div className='Report'>
                    <DailyReport/>
                </div>
            </div>
            
            


            <div className="home32">
              <div ><Location /></div>
              <div className="container5"><Alarm/></div>
            </div>
        </div>
      </div>
    </div>
  )
}
