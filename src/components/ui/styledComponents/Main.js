import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 110px);
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 1rem;

  & > * {
    padding: 1rem;
  }

  & > button {
    margin: 0 0.4rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    font-weight: bold;
    background: #3B5998;
    color: #fff;
  }
`;