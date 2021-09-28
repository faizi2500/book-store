import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <h1>BookStore CRM</h1>
        <ul className="navbar">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
