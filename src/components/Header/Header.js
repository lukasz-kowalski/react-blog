import React from 'react';
import { StyledHeader } from '../ui/styledComponents/Header';

const Header = ({ text }) => (
  <StyledHeader>
    {text}
  </StyledHeader>
);

export default Header;
