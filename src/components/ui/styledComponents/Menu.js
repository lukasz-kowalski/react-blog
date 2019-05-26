import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, a } from '../constants';

export const Nav = styled.nav`
  background: ${colors.blue};
`;

export const NavMenu = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

export const MenuLink = styled(NavLink)`
  color: #fff;
  ${a.padding}
  ${a.textDecoration}
  display: inline-block;
  height: 100%;
`;