

// // const client = new ApolloClient({
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



//adds CSS
import './Reset.css';
import './App.css';

// adds Routes
import Frontpage from './components/Pages/Frontpage/Frontpage.js';
import ParentSignup from './components/Pages/ParentSignup/ParentSignup.js';
import ChildSignup from './components/Pages/ChildSignup/ChildSignup.js';
import Home from './components/Pages/Home/Homepage.js';

//Grown up imports
import Login from './components/Pages/GrownupArea/Login.js'
import GrownupArea from './components/Pages/GrownupArea/GrowupArea.js'
import Sub from './components/Pages/GrownupArea/Sub.js'


//question inports
import QOne from './components/Pages/Questions/One.js'
import QTwo from './components/Pages/Questions/Two.js'
import QThree from './components/Pages/Questions/Three.js'
import QFinished from './components/Pages/Questions/Finished.js'

// need to add auth here!!!!






function App() {
  const [page, setPage] = useState("splash");

  return (
    // <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/ChildSignup" element={<ChildSignup />} />
          <Route path="/ParentSignup" element={<ParentSignup />} />
          <Route path="/Home" element={<Home />} />


          {/* grown up links  */}
          <Route path="/Login" element={<Login />} />
          <Route path="/GrownupArea" element={<GrownupArea />} />
          <Route path="/Sub" element={<Sub />} />

          {/* questions links  */}
          <Route path="/QOne" element={<QOne />} />
          <Route path="/QTwo" element={<QTwo />} />
          <Route path="/QThree" element={<QThree />} />
          <Route path="/QFinished" element={<QFinished />} />
        </Routes>
      </div>
    </Router>
    // </ApolloProvider>
  );
}


export default App;
