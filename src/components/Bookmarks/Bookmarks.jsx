/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 ">
      <h3 className="text-xl mb-7">Bookmarks:{bookmarks.length}</h3>
      <h4 className="text-lg">Reading time: {readingTime}</h4>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
