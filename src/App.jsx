import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks,setBookmarks] = useState([]);

const handleBookmarks = blog =>{
  // console.log('bookmarks added',blog);
  const newBookmarks = [...bookmarks,blog];
  setBookmarks(newBookmarks);
  // console.log(bookmarks);
}
  return (
    <>
      <Header></Header>
      <div className='md:flex  mt-5 gap-4'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
