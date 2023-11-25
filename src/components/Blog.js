import {Link, useNavigate} from 'react-router-dom'



const Blog = ({blog, deleteBlog}) => {
    const navigate = useNavigate()

    const handleDelete = (event) =>{
        event.preventDefault()
        deleteBlog(blog.id)
        navigate('/')
    } 

    return (
        <div>
            <h4 class='text-blue'>{blog.title}</h4>
            <h4>{blog.body}</h4>
            <Link to={`/edit/${blog.id}`}>
                <button>Edit Blog</button>
            </Link>
            <form onSubmit={handleDelete}>
                <input type='submit' value='remove'/>
            </form>
        </div>
        
    )
} 

export default Blog