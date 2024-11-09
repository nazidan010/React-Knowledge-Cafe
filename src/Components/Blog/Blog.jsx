import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='h-52 w-full rounded-md' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-2'>
                    <img className='w-10' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='font-bold'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 mt-2 text-2xl text-red-600'>
                        <CiBookmarkPlus />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx}><a href="">#{hash}</a></span>
                ))}
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
};

export default Blog;
