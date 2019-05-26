import React from 'react';
import { Nav, NavMenu, MenuLink } from '../ui/styledComponents/Menu';

const Menu = () => (
  <Nav>
    <NavMenu>
      <MenuLink to='/' exact>Home</MenuLink>
      <MenuLink to='/author'>Author</MenuLink>
      <MenuLink to='/contact'>Contact</MenuLink>
    </NavMenu>
  </Nav>
);

export default Menu;
