import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Main } from '../ui/styledComponents/Main';

const NotFound = () => {
  const [ shouldReRender, setRerender ] = useState(false);
  useEffect(() => {
    window.setTimeout(() => setRerender(true), 10000);
  })
  
  return (
    shouldReRender ? 
      <Redirect to='/' /> :
      <Main>
        404 - page not found
      </Main>
  );
}

export default NotFound;
