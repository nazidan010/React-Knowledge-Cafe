import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 rounded-xl">
            <h2 className="text-3xl text-center mt-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="mt-4 bg-slate-200 p-4 m-4 rounded-xl">
                    <h3 className="text-2xl">{bookmark.title}</h3>
                </div>
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmarks;
