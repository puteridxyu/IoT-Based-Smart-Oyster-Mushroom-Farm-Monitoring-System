import React from 'react';
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FeaturedInfo } from "../../componets/featuredInfo/FeaturedInfo"
import { Location } from '../../componets/location/Location';
import { Alarm } from '../../componets/alarm/Alarm';
import { DailyReport } from '../../componets/ConditionStatus/DailyReport';
import LineChart1 from '../../componets/lineChart/LineChart1';
import Topbar from '../../componets/topbar/Topbar';
import Sidebar from '../../componets/sidebar/Sidebar';


export default function Home() {
  return (
    <div>
      <Topbar className="topbar"/>
      <div className="container2">   
        <Sidebar className="sidebar"/> 
        <div className="home1">
            <FeaturedInfo />
            <div className="home22">
              <div className="container4"><LineChart1 /></div>
              <div className='Report1'><DailyReport/></div>
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
