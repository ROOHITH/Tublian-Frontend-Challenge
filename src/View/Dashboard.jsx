// Dashboard.js
import React from 'react';
import TopMenu from './TopMenu';
import DashboardContent from './DashboardContent';
import SideMenu from '../components/SideMenu/SideMenu';
import '../App.css'

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard">
      <SideMenu />
      <div className="content">
        <TopMenu onLogout={onLogout} />
        <div className="main">
          <DashboardContent/>
         
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
