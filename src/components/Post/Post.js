import React, { useState, useEffect } from 'react';
import Loader from '../ui/Loader';
import { Main } from '../ui/styledComponents/Main';
import { Form, Input, ErrorMsg, Button, Div, RemoveButton } from '../ui/styledComponents/Post';


const Post = ({ match }) => {
  const [ post, setPost ] = useState({});
  const [ loaded, setLoaded ] = useState(false);
  const [ comments, setComments ] = useState([]);
  const [ comment, setComment ] = useState('');
  const [ error, setError ] =  useState(false);

  useEffect(() => {
    if (localStorage.getItem('comments')) {
      setComments(JSON.parse(localStorage.getItem('comments')));
    }
    let subscribed = true;
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
      const data = await response.json();
      if (subscribed) {
        setPost(data);
        setLoaded(true);
      }
    }
    fetchData();
    return () => subscribed = false;
  }, [match.params.id])

  const handleChange = event => {
    const { value } = event.target;
    setComment(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (comment.length > 0) {
      if (comments.indexOf(comment) === -1) {
        setComments(prevState => {
          const newArr = [...prevState, comment];
          localStorage.setItem('comments', JSON.stringify(newArr));
          return newArr;
        });
        setComment('');
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const removeComment = comment => {
    setComments(prevState => {
      const newArr = prevState.filter(item => item !== comment);
      localStorage.setItem('comments', JSON.stringify(newArr));
      return newArr;
    })
  };

  return (
    <Main>
      {loaded ? 
      <React.Fragment>
        <h1>Title: {post.title}</h1>
        <p>Body: {post.body}</p>

        <Form onSubmit={handleSubmit}>
          <label htmlFor='input-comment'>Add comment</label>
          <Input type='text' placeholder='write comment...' id='input-comment' name='input-comment' onChange={handleChange} value={comment} />
          {error && <ErrorMsg>Comment is already added</ErrorMsg>}
          <Button type='submit'>Add comment</Button>
        </Form>

        {comments.map((item, index) => 
          <Div key={item + index}>
            <p>Comment: {item}</p> 
            <RemoveButton onClick={() => removeComment(item)}>remove comment</RemoveButton>
          </Div>
        )}
      </React.Fragment> :
      <Loader />
      }
    </Main>
  );
}

export default Post;
