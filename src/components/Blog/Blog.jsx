/* eslint-disable react/prop-types */
import author_image from '../../assets/Images/boy1.png';
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({blog,handleBookmarks,handleMarksRead}) => {
    const {title,cover_img,author,posted_date,hashtag,reading_time} = blog;
    return (
        <div className=''>
            <img className='rounded-xl' src={cover_img} alt="" />
            <div className="flex items-center justify-between my-6">
                <div className="flex items-center gap-4">
                    <img width="60px" className="rounded-[50%]" src={author_image} alt="" />
                    <div className="flex flex-col">
                        <span>{author}</span>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time}</span>
                    <button onClick={()=>handleBookmarks(blog)}>
                    <FaRegBookmark className='text-xl' />
                    </button>
                </div>
            </div>
            <h1 className="text-4xl mb-3">{title}</h1>
            {
                hashtag.map((hash,idx)=><span key={idx} ><p>{hash}</p></span>)
            }   
            <button className='text-blue-500 underline' onClick={()=>handleMarksRead(reading_time)}>Marks as Read</button>
            <hr className='mt-4' />

        </div>
    );
};



export default Blog;