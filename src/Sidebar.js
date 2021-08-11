import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://avatars.githubusercontent.com/u/47632450?v=4" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Akash S M </h2>
                <h4>akashsm@ce.iitr.ac.in</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Views on Posts</p>
                    <p className="sidebar__statNumber">3,456</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p> Recent </p>
            </div>
        </div>
    )
}

export default Sidebar;
