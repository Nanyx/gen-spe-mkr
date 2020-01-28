import React from 'react';

import './menu.css';

export const Container = ({children}) => (
  <ul className="menu">
    {children}
  </ul>
);

export const Item = ({icon, color, onClick}) => (
  <li>
    <button className={`btn btn-lg ${color}`} type="button" onClick={onClick}>
      <i className={icon}/>
    </button>
  </li>
);