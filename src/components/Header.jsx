import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header >
      <ul className="nav navbar-nav">
        <li>
          <NavLink  to="/login" replace>Форма входа</NavLink>
        </li>
        <li>
          <NavLink exact  to="/news" replace>Новости</NavLink>
        </li>
        <li>
          <NavLink  to="/profile" replace>Профиль</NavLink>
        </li>
        <li>
          <NavLink exact to="/" replace>Главная</NavLink>
        </li>
      </ul>
    </header>
  </div>
);

export default Header;