import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <hr />
      <NavLink
        to="/"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
      >
        Homepage
      </NavLink>
      {' / '}
      <NavLink
        to="/news"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
      >
        News
      </NavLink>
      <hr />
    </>
  );
};

export default Header;
