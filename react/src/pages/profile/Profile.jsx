import React from 'react';
import './profile.css'
import Sidebar from '../../componets/sidebar/Sidebar';
import Topbar from '../../componets/topbar/Topbar';

export default function Profile() {
  return (
    <div>
      <Topbar className="topbar"/>
      <div className="container2">   
        <Sidebar className="sidebar"/> 
        <div className='user'>
          <div className = "userTitleContainer">
            <h1 className = "userTitle">My Profile</h1>
            <button className='userAddButton'>Add User</button>
          </div>
          <div className='userContainer'>
            <div className='userShow'>
              <div className='userShowTop'> 
                <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" 
                alt="" 
                className="userShowImg" 
                />
                <div className="userShowTopTitle">
                  <span className='userShowUsername'> </span>
                  <span className='userShowUserTitle'> </span>
                </div>
              </div>
              <div className='userShowBottom'>
                <span className='userShowTitle'>Account Detail</span> 
              </div>
            </div>
            <  div className='userUpdate'>hai</div>
            </div>
            
            </div></div></div>
  )
}

