import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import SideBar from './Components/SideBar';

function MainPage() {
    return (
        <div>
            <SideBar/>
            <div className='FormationCanvas'>

            </div>
        </div>
    );
}

export default MainPage;