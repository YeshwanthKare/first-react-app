import React from 'react';
// import './App.css';
// import './style.css'
import Article from '../src/Article';
import { useState } from 'react';

function App() {

  const [articles, setArticles] = useState(["foo", "div", "ans", "dub"])

  articles.forEach(article => {
    console.log(article)
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className='container'>

        {
          articles.map((article, index) => {
            return <Article text="lorem ipsum" header={`${index + 1} : ${article}`}/> 
          })
        }
      </div>
{/* 
      <Article text="lorem ipsum" header="Test 1"/>
      <Article text="loremipsum 1" header="Test 2"/>
      <Article text="lorem ipsum 2" header="Test 3"/> */}

      
      
    </div>
  );
}

export default App;
