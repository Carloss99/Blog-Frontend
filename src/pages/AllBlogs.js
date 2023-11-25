import Blog from '../components/Blog'
import {Link} from 'react-router-dom'

const AllBlogs = ({blogs, deleteBlog}) => (
    <>
        <Link to='/new'>
            <button>Add New Blog</button>
        </Link>
        {blogs.map((blog) => <Blog blog={blog} deleteBlog={deleteBlog}/>)}
    </>
)

export default AllBlogs