import {useMemo, useState} from 'react'
import {useNavigate, useParams, Link} from'react-router-dom'

const BlogForm = ({blogs, formType, handleSubmit}) => {
    const navigate = useNavigate()
    const params = useParams()

    const currentBlog = useMemo(() => blogs.find(blog => blog.id === parseInt(params.id)) , [params.id, blogs])

    const [blogData, setFormData] = useState(
        formType === 'new blog' ? {
            title: '',
            body: ''
        } : {
            title: currentBlog.title,
            body: currentBlog.body,
            id: parseInt(currentBlog.id)
        }
    )

    const handleChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(blogData, formType)
        navigate('/')
    }

    return(
        <div>
            <h3>New blog Form</h3>
            <form onSubmit={handleSubmission}>
                <label >Title: </label>
                <input type='text' name='title' value={blogData.title} onChange={handleChange}/>
                <label >Body: </label>
                <input type='text' name='body' value={blogData.body} onChange={handleChange}/>
                <input type='submit' />
                
            </form>
            <Link to='/'>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default BlogForm