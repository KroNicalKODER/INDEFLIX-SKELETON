import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AfterLogin from './Pages/AfterLogin';
import Contributions from './Pages/contributions';
import Global from './Pages/Global';
import Profile from './Pages/Profile';
import Premium from './Pages/Premium'
import Sidepane from './Components/sidePane/sidepane';
import Video from './Pages/Video';
import Logout from './Pages/Logout';

function App() {
  const backgroundStyle = {
    // background: "linear-gradient(287.56deg, #00031A 0%, rgba(15, 23, 95, 0.96) 100%)"
    backgroundColor: '#14001E'
}
  return (
    <div className='min-h-screen min-w-full' style={backgroundStyle}>
    <BrowserRouter>
      <Sidepane/>
      <Routes>
        <Route exact path='/lock1' element={<LandingPage/>} />
        <Route exact path='/lock2' element={<AfterLogin/>} />
        <Route exact path='/' element={<Contributions/>} />
        <Route exact path='/global' element={<Global/>} />
        <Route exact path='/global/video/:id' element={<Video/>} />
        <Route exact path='/profile' element={<Profile/>  } />
        <Route exact path='/premium' element={<Premium/>  } />
        <Route exact path='/logout' element={<Logout/>  } />
        <Route path="video">
          <Route path=":id" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>  
    </div>    
  );
}

export default App;
