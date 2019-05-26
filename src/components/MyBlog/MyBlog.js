import React, { useState, useEffect } from 'react';
import { Main } from '../ui/styledComponents/Main';
import Header from '../Header/Header';
import TextSection from '../TextSection/TextSection';
import Footer from '../Footer/Footer';
import Button from '../ui/Button';
import CounterState from '../ui/CounterState';
import PostsList from '../PostsList/PostsList';
import Loader from '../ui/Loader';

function MyBlog() {
  const [ count, setCount ] = useState(0);
  const [ posts, setPosts ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    let subscribed = true;
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      if (subscribed) {
        setPosts(data);
        setLoaded(true);
      }
    }
    fetchData();
    return () => subscribed = false;
  }, [])

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className="my-blog">
      {loaded ?
        <React.Fragment>
          <Header
            text="My Blog"
          />
          <Main>
            <TextSection
              text="Lorem ipsum dolor sit amet, consectetur adipiscingelit. Suspendisse fringilla fringilla neque ac laoreet.Fusce vel nulla ornare, aliquam ex eget, sollicitudinneque. Morbi venenatis rutrum ligula vel scelerisque.Lorem ipsum dolor."
            />
            <PostsList posts={posts} />
            <CounterState label="Stan:" count={count} />
            <Button handler={increaseCount} label="+" />
            <Button handler={decreaseCount} label="-" />
            <Button handler={resetCount} label="RESET" />
          </Main>
          <Footer
            text={`© Copyright - ${new Date().getFullYear()}.`}
          />
        </React.Fragment> : 
      <Loader />
    }
    </div>
  );
}

export default MyBlog;
