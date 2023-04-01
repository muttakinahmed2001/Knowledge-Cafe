
import React, { useEffect, useState } from 'react';
 import './Container.css'
import Blog from '../Blog/Blog';

const Container = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div>
            <div className='container'>
                <div className='blogs'> 
{
    blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
}
                    <p>blogs:{blogs.length}</p>
                     </div>
                <div className='bookmarks'>Bookmarks</div>
            </div>
        </div>
    );
};

export default Container;