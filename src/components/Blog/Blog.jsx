import React from 'react';
import './Blog.css'
const Blog = (props) => {
  const{authorName,id,authorImage,blogCoverImage,publishDate}=props.blog
    return (
        <div className='blog'>
            <img src={blogCoverImage} alt="" />
            <div className='author-information'></div>
         
        </div>
    );
};

export default Blog;