/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 ">
      <h3 className="text-xl mb-7">Bookmarks:{bookmarks.length}</h3>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
