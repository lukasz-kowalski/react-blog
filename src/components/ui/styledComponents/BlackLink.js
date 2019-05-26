import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { a } from '../constants';

export const BlackLink = styled(Link)`
  display: block;
  color: black;
  ${a.padding}
  ${a.textDecoration}
`;

