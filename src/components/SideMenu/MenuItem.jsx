// components/SideMenu/MenuItem.js
import React from 'react';

function MenuItem({ text,image }) {
    return <li>
        <img src={image} className='menuList-img' alt="menuList Image" />
        <span className='menuList-name'>{text}</span>
    </li>;
}

export default MenuItem;
