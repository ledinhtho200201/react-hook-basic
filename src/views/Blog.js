import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link, useHistory } from 'react-router-dom';

const Blog = () => {
    let history = useHistory();
    const { data: dataBlogs, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts')

    let newData = []
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 10);
    }

    const handleAddNew = () => {
        history.push('/add-new-blog')
    }

    return (
        <>
            <div>
                <button className="btn-add-new" onClick={handleAddNew}>+ Add new blog</button>
            </div>
            <div className="blogs-container">
                {!isLoading && newData && newData.length > 0 && newData.map((item) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">Title: {item.title}</div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>View detail</Link>
                            </button>
                        </div>
                    )
                })}
                {isLoading &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loding data...</div>
                }
            </div>
        </>
    )
}

export default Blog;