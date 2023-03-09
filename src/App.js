import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';

// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// context
import { AuthContextProvider } from './context/AuthContext'
import EditPost from './pages/EditPost/EditPost';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuth();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  };
  
  return (
    <div className="App">
      <AuthContextProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              {/* if ternário no element para não forçar e ir para rota não autorizada */}
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search />} />
              <Route path='/post/:id' element={<Post />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/post/edit/:id' element={user ? <EditPost /> : <Navigate to='/login' />} />
              <Route path='/post/create' element={user ? <CreatePost /> : <Navigate to='/login' />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
