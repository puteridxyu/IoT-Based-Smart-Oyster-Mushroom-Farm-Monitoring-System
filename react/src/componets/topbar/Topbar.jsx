import React from 'react';
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom"
import { useState } from "react";
import LogoutButton from '../../pages/Login/LogoutButton';

export default function Topbar() {

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
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///+YzP3f8P5HiMe23P44gcSbz
                        /9EhsbK2eyjzPNBhMS02/6c0P82gMTl9f89g8W74P9WkctcmNPI5f6Duu55sefX7P7Z5fJpo9zv9PqOw/azyuVOjcvB1Or2+fzl7faZud2Msd
                        mAqdZxoNJ1reTF1+thndejwOBfls2wzuuTtdvS6v7f6fR7ptWFrddtntGHteOVweu4rk3aAAANjElEQVR4nO2de3eiPBCHX0XARmkAxQui9VZ
                        l22rb7//lXjLD/eIFoome/v7Yc3ZtuzydzEwySYb//vvTn/70p6fR9G087oYaj7/epgvRT8RF0/F8vzxufE83mNRQ8BeDeP7muJy9f01FP2Yt
                        vXX3R4sGUJQQPZBSouCfCaEBr+of9+9vj2PU8WzlU4ZWRlUunYFS6zgbi374c5p2l35gElJqsgs4A3taH+/Sjtrx0lIr4HQYkBlVDl2iqv6yK
                        xqmoOl8TY0CHWIpnr2bTLbOEOTCn46z3U52tqcga4HSMDYziUw53ft5r2NsirebOEO31dL6GqgVC/8e/Hur5Q6dyc7TGWj2J1D1Ww7Ixcw3qJ
                        61APV226ELYK3zYqgB6Hbn5eypq4YvHLJ7UNX0M+lEsbfD1mVoBdBWgBmM2yzkRqBPTveeQdK203dbt9W/Hi6D6To7PQ1JDH0pxpDjQ3p0EuJ
                        t3TqmK6fceilInRrrr7vzvfsp8+nU3rqNbFekdB07Fb2I8X3fwTpTDD3Bs5xmQ7MCst9y7MSSuuHN78gXR5cgskxcLmOzHDIYrrEr6Koyuwvf
                        PM1nD2+GF0EOd3GqDBhvb8euFY/Pm5ovDdnaKiQeq/5tJ+dvm4TPc1p3wAsZHS9hPNwwd+zj+Em9Ww/PHKM29GgcV/c34ut6avR/WPflixij3
                        6/q3SJ1LNZGPD6HN0gOFzD2E0Zjzb0iMCfhD9d15+72ixk1JwqrROdrxsUhjDA6mdwtvpQytibhJEA3jhwBx1G0prYrkg8YXTt6GOuNF+AsMq
                        Ay7AvmY+oPlciMnOY4hzDEkJ3QAZpIa+1IFHA48L2FIzSIMDIYEBWbkVqN0383HKHElsSAKK0VeqNOG87iIhckW5n4mPpbDKq60WgyvjTCECM
                        8hBYVj9Qmk7iVGk7SpBqhkbSWFyJ+1AU8ICCdyBNistLCmFo3pB5wMk+3sgIyZ8RnVGshhoBEoiRRVN8htRHXIeBQRhdMpA0xpKqrawHDIKNL
                        GESz0lxcblwbUffhTE16wBTiVZPUuYETtQcAZAMVHcq4YnYzRguShwAEXwSDqBevphZYhJU9yCSKEK1LCX0if5rIKpikwiNvLgNcwrAm0s5ky
                        tSfkMsDahejjP1IgAGijQH1gl24Bc7YPdGPfLUwvXnnCQ84ol3RD3ytNBcenJ5dZ7zDGKXOo4TRRBpGm3NZcQHzg0dzQpRm6RekjBWFJb3oh6
                        0nF+fgJ+Ppm4GZ8PHGKJOGSyn11JbGhjzsGGXqe2CgE+V+nI8+XhyNhfHUqJ6f+uCqk8cco0z9HSMghypAnM08aJgJddqI37qUtd9rpE0YA63
                        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" 
                        alt="" 
                        className="topAvatar1" />
                    <p> &nbsp; </p>
                    <p> &nbsp; </p>
                    <span className="logo">SmartMushRoom</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                        
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <div class="dropdown">
                
                    <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" 
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        alt="" 
                        className="topAvatar" 
                    />
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">My Profile</a></li>
                        <li><a class="dropdown-item" href="#">Notification</a></li>
                        <li><a class="dropdown-item" href="#">Setting</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <Link to="/" className="link" onClick={handleActive}>
                        <li><LogoutButton/></li></Link>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
