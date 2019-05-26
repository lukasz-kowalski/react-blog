import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyBlog from './components/MyBlog/MyBlog';
import Author from './components/Author/Author';
import Contact from './components/Contact/Contact';
import Post from './components/Post/Post';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound/NotFound';

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Menu />
      <Switch>
        <Route path='/' component={MyBlog} exact />
        <Route path='/author' component={Author} />
        <Route path='/contact' component={Contact} />
        <Route path='/post/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
