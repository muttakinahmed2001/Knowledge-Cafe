
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
    const handlerAddedToButton =(blog)=>{
        console.log('hanler')
    }
    return (
        <div>
            <div className='container'>
                
                <div className='blogs'> 
{
    blogs.map(blog => <Blog blog={blog} key={blog.id} handlerAddedToButton={handlerAddedToButton} ></Blog>)
}
                    <p>blogs:{blogs.length}</p>
                     </div>
                <div className='bookmarks'>Bookmarks</div>
            </div>
        </div>
    );
};

export default Container;