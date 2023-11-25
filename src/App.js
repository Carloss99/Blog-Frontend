import './App.css';
import {useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'

import AllBlogs from './pages/AllBlogs'
import BlogForm from './pages/BlogForm';

const apiURL = 'https://blog-backend1-9aad7abf5dbc.herokuapp.com'

function App() {

  //state for blog
  const [blogs, setblog] = useState([])

  //Get blogs
  const getBlogs = async () => {
    const response = await fetch(apiURL + '/blog/')
    const data = await response.json()
    console.log(data)
    setblog(data)
  }

  const handleSubmit = async (data, type) => {
    if(type === 'new blog'){
      const response = await fetch(`${apiURL}/blog/`, {
        method: 'post',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    } else {
      const response = await fetch(`${apiURL}/blog/${data.id}/`, {
        method:'put',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    }
  }


  const deleteBlog = async (id) => {
    const response = await fetch(`${apiURL}/blog/${id}`, {
      method:'delete',
    })
    getBlogs()
  }


  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div className="App">
      <h1>My Blog</h1>
      <Routes>
        <Route exact path="/" element={<AllBlogs blogs={blogs} deleteBlog={deleteBlog}/>}/>

        <Route exact path='/new' element={<BlogForm blogs={blogs} formType='new blog' handleSubmit={handleSubmit}/>} />

        <Route exact path='/edit/:id' element={<BlogForm blogs={blogs} formType='edit blog' handleSubmit={handleSubmit}/>}/>


      </Routes>
    </div>
  );
}

export default App;
