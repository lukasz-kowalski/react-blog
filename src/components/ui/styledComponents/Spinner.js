import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-top: 10rem;
  border: #3B5998 solid 2px;
  border-left: #fff solid 2px;
  animation: ${spinner} 0.5s ease-in-out infinite;
`;
