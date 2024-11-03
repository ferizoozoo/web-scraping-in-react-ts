import { useEffect, useState } from 'react';
import './App.css'
import { HackerNewsScraper } from './scraper';

function App() {
  const [posts, setPosts] = useState<NodeListOf<Element>>();

  useEffect(() => {
    const scraper = new HackerNewsScraper();
    scraper.getPosts()
      .then(data => { 
        setPosts(data) 
      })
  }, []);

  return (
    <>
    {posts && Array.from(posts).map((value, index) => (
      <div key={index} dangerouslySetInnerHTML={{ __html: value.innerHTML}}></div>
    ))}
    </>
  )
}

export default App
