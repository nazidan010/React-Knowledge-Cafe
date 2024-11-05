import PropTypes from 'prop-types';
const Blog = ({blog,}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    console.log(blog);
    return (
        <div>
            <img className='h-52 w-52' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between'>
            <div className='flex gap-2'>
                <img className='w-10' src={author_img} alt="" />
                <div>
                <h2 className='font-bold text-2xl'>{author}</h2>
                <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span className='font-bold'>{reading_time} min read</span>
            </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;