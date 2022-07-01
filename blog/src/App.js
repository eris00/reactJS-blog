import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Pages/Header';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import PostPage from './Pages/PostPage';
import NewPost from './Pages/NewPost';
import About from './Pages/About';
import MissingPage from './Pages/MissingPage';
import Footer from './Pages/Footer';




function App() {

  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [post, setPost] = useState([
    {
      id:1,
      title: 'gta',
      description: 'GtaLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas iusto debitis facilis quisquam consequatur laboriosam voluptatibus rerum.',
      image: 'https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg'
    },
    {
      id:2,
      title: 'far cry',
      description: 'FCLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas iusto debitis facilis quisquam consequatur laboriosam voluptatibus rerum.',
      image: 'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png'
    },
    {
      id:3,
      title: 'assassins creed',
      description: 'ASSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas iusto debitis facilis quisquam consequatur laboriosam voluptatibus rerum.',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8XGEPtD1xoasK0FYkYNcCn1z.png'
    }
  ]);

  useEffect(() => {
    const filteredResult = post.filter(singlePost => (
      (singlePost.title).toLowerCase().startsWith(search.toLowerCase()) ||
      (singlePost.description).toLowerCase().includes(search.toLowerCase())));
    setSearchRes(filteredResult.reverse());
  }, [search, post]);

  const handleDelete = (id) => {
    const postArray = post.filter(singlePost => (singlePost.id !== id));
    setPost(postArray);
    navigate('/');
  }

  const addPost = (title, description, imgLink) => {
    const postId = post.length > 0 ? post[post.length-1].id + 1 : 1;
    const postTitle = title;
    const postDesc = description;
    const postImage = imgLink;
    const newPost = {id:postId, title:postTitle, description:postDesc, image: postImage};
    const postLists = [...post, newPost];
    setPost(postLists);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, description, image);
    setTitle('');
    setDescription('');
    setImage('');
  }

  return (
    <>
      <Header title={'React JS Blog'} />
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route index element={<Home post={searchRes} />}/>
        <Route path='post'>
          <Route index element={<NewPost 
            handleSubmit={handleSubmit}
            setTitle={setTitle}
            setDescription={setDescription}
            setImage={setImage}
            />
            }/>
          <Route path=':id' element={<PostPage post={post} handleDelete={handleDelete} />}/>
        </Route>
        <Route path='about' element={<About />}/>
        <Route path='*' element={<MissingPage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
