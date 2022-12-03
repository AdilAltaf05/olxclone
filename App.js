import React from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import User from './components/user';
import Navbar from './Main/Navbar';
import Footer from './Main/footer';
import Chat from './Main/Chat';

function App() {
  return (
    <>

    <Routes>


      <Route path='/'  element={<Home />} />
      <Route path='/add'  element={<Add />} />
      <Route path='/chat'  element={<Chat />} />
      <Route path="/User:userId" element={<User />} />
      {/* <Route path='/foot'  element={<Footer />} /> */}
      {/* <Route path='/nav' element={ <Navbar/> } /> */}


    </Routes>

    </>
  );
}

export default App;
