import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Setting.css';

const Setting = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <from className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="img"
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your Name" />
                    <label>Email</label>
                    <input type="Email" placeholder="Enter your Email" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </from>
            </div>
            <Sidebar />
        </div>
    );
};

export default Setting;