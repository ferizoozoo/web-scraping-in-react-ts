import { useEffect, useState } from 'react';
import './App.css'
import { HackerNewsScraper } from './scraper';
import { Post } from './types';
import Posts from './components/news/posts';

function App() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const scraper = new HackerNewsScraper();
    scraper.getPosts()
      .then(data => { 
        setPosts(data) 
      })
  }, []);

  return (
    <Posts posts={posts} />
  )
}

export default App
