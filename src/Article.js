import React from 'react';
import '../src/Article.css'

const Article = (props) => {
    return (
        <div class="article">
           <h3>{props.header}</h3>
            <p class="articleText">{props.text}</p> 
      </div>
    );
}

export default Article;