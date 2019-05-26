import styled from 'styled-components';
import { colors } from '../constants';

const padding = 'padding: 10px';
const borderRadius = 'border-radius: 8px';

export const Form = styled.form`
  position: relative;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  ${padding};
  margin: 0 20px;
  border: 1px solid black;
  ${borderRadius};
`;

export const Button = styled.button`
  ${padding};
  background: ${colors.blue};
  color: white;
  ${borderRadius};
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const RemoveButton = styled.button`
  ${padding};
  margin-left: 10px;
  background: ${colors.red};
  color: white;
  ${borderRadius};
`;

export const ErrorMsg = styled.p`
  position: absolute;
  left: 100px;
  color: ${colors.red};
`;
