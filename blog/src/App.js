import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Pages/Header';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import PostPage from './Pages/PostPage';
import NewPost from './Pages/NewPost';
import EditPost from './Pages/EditPost';
import About from './Pages/About';
import MissingPage from './Pages/MissingPage';
import Footer from './Pages/Footer';
import api from './api/posts';

function App() {

  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState('');
  const [post, setPost] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postImage, setPostImage] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImage, setEditImage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPost(response.data);
      } catch (err) {
        if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPosts();    
  }, [])
  

  useEffect(() => { 
    const filteredResult = post.filter(singlePost => (
      ((singlePost.title).toLowerCase()).includes(search.toLowerCase()) ||
      ((singlePost.description).toLowerCase()).includes(search.toLowerCase())));
    setSearchRes(filteredResult.reverse()); 
  }, [search, post]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postArray = post.filter(singlePost => (singlePost.id !== id));
      setPost(postArray);
      navigate('/');
    } catch(err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const editedPost = {id, title: editTitle, description: editDescription, image: editImage};
    try {
      const response = await api.put(`/posts/${id}`, editedPost);
      setPost(post.map(singlePost => singlePost.id === id ? { ...response.data } : post ));
      setEditTitle('');
      setEditDescription('');
      setEditImage('');
      navigate('/');

    } catch(err) {
      console.log(`Error: ${err.message}`);
    }
  }
  

  const addPost = async () => {
    const postId = post.length > 0 ? post[post.length-1].id + 1 : 1;
    const newPost = {id: postId, title: postTitle, description: postDescription, image: postImage};
    try {
      const response = await api.post('/posts', newPost);
      const postList = [...post, response.data];
      setPost(postList);
    } catch(err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost();
    
    setPostTitle('');
    setPostDescription('');
    setPostImage('');

    navigate('/');
  }

  return (
    <>
      <Header title={'React JS Blog'} />
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route index element={<Home post={searchRes} />} />
        <Route path='post'>
          <Route index element={<NewPost 
            handleSubmit={handleSubmit}
            setPostTitle={setPostTitle}
            setPostDescription={setPostDescription}
            setPostImage={setPostImage}
            />
          }/>
          <Route path=':id' element={<PostPage 
            post={post} 
            handleDelete={handleDelete} />}
          />

          <Route path="edit/:id" element={<EditPost
            post={post}
            handleEdit={handleEdit}
            setEditTitle={setEditTitle}
            setEditDescription={setEditDescription}
            setEditImage={setEditImage}
            editTitle={editTitle}
            editDescription={editDescription}
            editImage={editImage}
            />} 
          />

        </Route>




        <Route path='about' element={<About />}/>
        <Route path='*' element={<MissingPage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
