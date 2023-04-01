import React from 'react';
 
import icon from '../../images/icons8-bookmark-outline.svg'

import './Blog.css'
const Blog = (props) => {
    const { authorName, id, blogTitle, authorImage, blogCoverImage, publishDate,readTime, } = props.blog
   const handlerAddedToButton=props.handlerAddedToButton;
    return (
        <div className='blog'>
            <img src={blogCoverImage} alt="" />
            <div className='info-container'>
                <div className="author-information">
                    <img src={authorImage} alt="" />
                    <div className='author-name'>
                        <h5>{authorName}</h5>
                        <h6>{publishDate}</h6>
                    </div>



                </div>
                <div ><p>{readTime}</p> <button className='bookmark' onClick={()=>{handlerAddedToButton()}} ><img src={icon} alt="" /></button></div>
                 
            </div>

            <h1>{blogTitle}</h1>




        </div>


    );
};

export default Blog;