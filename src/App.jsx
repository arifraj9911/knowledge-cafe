import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    // console.log('bookmarks added',blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    // console.log(bookmarks);
  };

  const handleMarksRead = (id, time) => {
    console.log("marks read added", time, id);
    const readTime = readingTime + time;
    setReadingTime(readTime);
    // console.log(readingTime);
    const removeItem = bookmarks.filter((item) => item.id !== id);
    setBookmarks(removeItem);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex  mt-5 gap-4">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleMarksRead={handleMarksRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
