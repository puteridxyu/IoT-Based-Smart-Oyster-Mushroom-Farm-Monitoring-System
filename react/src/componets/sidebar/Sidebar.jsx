import React from 'react';
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReorderIcon from '@mui/icons-material/Reorder';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import InsightsIcon from '@mui/icons-material/Insights';
import {Link} from "react-router-dom"
import { useState } from "react";

export default function Sidebar() {

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
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/home" className="link" onClick={handleActive}>
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Data</h3>
                    <ul className="sidebarList">
                        <Link to="/list" className="link" onClick={handleActive}>
                        <li className="sidebarListItem">
                            <ReorderIcon className="sidebarIcon"/>
                            List
                        </li>
                        </Link>

                        <Link to="/graph" className="link" onClick={handleActive}>
                        <li className="sidebarListItem">
                            <LineAxisIcon className="sidebarIcon"/>
                            Graph
                        </li></Link>

                        <Link to="/analytic" className="link" onClick={handleActive}>
                        <li className="sidebarListItem">
                            <InsightsIcon className="sidebarIcon"/>
                            Analytic
                        </li></Link>
                    </ul>
                </div>
                
        
            </div>
        </div>
    )
}
