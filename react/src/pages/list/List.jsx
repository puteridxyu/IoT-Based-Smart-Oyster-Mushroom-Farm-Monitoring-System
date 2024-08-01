import React from 'react';
import { RealtimeData2 } from '../../componets/realtimeData';
import Sidebar from '../../componets/sidebar/Sidebar';
import Topbar from '../../componets/topbar/Topbar';
import "./list.css"


export default function List() {
  return (
    <div>
      <Topbar className="topbar"/>
      <div className="container2">   
        <Sidebar className="sidebar"/>
        <div className='user1'>
          <div className = "userTitleContainer1">
            <h1 className = "userTitle1">Historical Data</h1>
          </div>
          <div className='userContainer1'>
            < div className='userUpdate1'>
              <RealtimeData2/>
            </div>
          </div>
            </div></div>
        </div>
  )
}





