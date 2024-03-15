/* eslint-disable react/prop-types */


const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-gray-200 p-4 mb-2 rounded-xl">
            <p>{bookmark.title}</p>
        </div>
    );
};

export default Bookmark;