// TopMenu.js
import React from 'react';
import searchIcon from '../assets/search.svg';
import profileimage from "../assets/profileimage.svg";
function TopMenu({ onLogout }) {
  return (
    <div className="top-menu">
      <div className='top-menu-box box-1'>
        <span className='top-menu-text'>Metrics looking good, Snow!</span>
      </div>
      <div className='top-menu-box box-2'>
        <form>
          <img src={searchIcon} className='search-img' alt="search Image" />
          <input type="search" placeholder='Search' className='search-input'></input>
        </form>
      </div>
      <div className='top-menu-box box-3'>
        <div className="top-menu-profile-picture ">
          <img src={profileimage} className='profilepicture-rounded'></img>
        </div>
        <div className="top-menu-profile-details ">
          <span className='profile-name'>Snow Olohijere</span>
          <span className='profile-email'>uch231@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
