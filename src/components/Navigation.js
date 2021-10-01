import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 1,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <>
      <nav className="fullNav">
        <div className="first-half">
          <h1>BookStore CRM</h1>
          <ul className="navbar">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div cl>
          <FaUserCircle className="user" />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
