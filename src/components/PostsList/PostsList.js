import React from 'react';
import { BlackLink } from '../ui/styledComponents/BlackLink';

const PostsList = ({ posts }) => (
  <div>
    {posts.map(item =>
      <BlackLink key={item.title} to={`/post/${item.id}`}>Title: {item.title}</BlackLink>
    )}
  </div>
);

export default PostsList;
