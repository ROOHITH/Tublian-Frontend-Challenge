// SideMenu.js
import React from 'react';
import MenuItem from './MenuItem';
import titleImage from '../../assets/title_images.svg';
import dashboardIcon from '../../assets/dashboardIcon.svg';
import AnalyticsIcon from '../../assets/Analytics.svg';
import CommunitiesIcon from '../../assets/Communities.svg';
import MediaIcon from '../../assets/Media.svg';
import NotificationsIcon from '../../assets/Notifications.svg';
import SettingsIcon from '../../assets/Settings.svg';
import SupportIcon from '../../assets/Support.svg';
import logoutIcon from '../../assets/logout.svg';


import SideMenuViewModel from '../../ViewModel/SideMenuViewModel';
function SideMenu() {
  const { handleMenuItemClick, logout } = SideMenuViewModel();

  return (
    <div className="side-menu">
      <div className='title-img-box'>
        <img src={titleImage} className='title-img' alt="Title Image" />
      </div>
      <div className='menu-title'>
        <img src={dashboardIcon} className='dashboard-img' alt="dashboard Image" />
        <span className='menu-name'>dashboard</span>
      </div>
      <ul className='menu-item'>
        <MenuItem text="Analytics" image={AnalyticsIcon} />
        <MenuItem text="Communities" image={CommunitiesIcon} />
        <MenuItem text="Notifications" image={NotificationsIcon} />
        <MenuItem text="Media" image={MediaIcon} />
        <MenuItem text="Support" image={SupportIcon} />
        <MenuItem text="Settings" image={SettingsIcon} />
      </ul>
      <div className='logout-button-box'>
        <img src={logoutIcon} className='logout-img' alt="logout Image" />
        <span className="logout-button" onClick={logout}>Log-out</span>
      </div>

    </div>
  );
}

export default SideMenu;
