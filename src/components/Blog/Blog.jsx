import React from 'react';
import './Blog.css'
const Blog = (props) => {
  const{authorName,id,blogTitle,authorImage,blogCoverImage,publishDate}=props.blog
    return (
        <div className='blog'>
            <img src={blogCoverImage} alt="" />
              <div className="author-information"> <img src={authorImage} alt="" />

              <div className='author-name'>
              <h5>{authorName}</h5>
                    <h6>{publishDate}</h6>
              </div>
              </div>
              <h1>{blogTitle}</h1>
               
                
                    
                
             </div>
        
        
    );
};

export default Blog;