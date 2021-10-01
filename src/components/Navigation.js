import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 1,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <>
      <nav className="fullNav">
        <div className="first-half">
          <h1 className="heading">BookStore CRM</h1>
          <ul className="navbar">
            {links.map((link) => (
              <li key={link.path} className="nav-links">
                <NavLink to={link.path} className="links">{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="icon-Div">
          <FaUserAlt className="user" />
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navigation;
