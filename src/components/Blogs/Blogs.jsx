/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks,handleMarksRead}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])
    return (
        <div className="w-2/3 ">
          <h2 className="text-3xl mb-5">Blogs:{blogs.length}</h2>
          <div className="flex flex-col gap-5">
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleMarksRead={handleMarksRead}></Blog>)
            }
            </div>  
        </div>
    );
};

export default Blogs;