import React from 'react';
import axios from 'axios';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import FeelingPage from '../FeelingPage/FeelingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import Success from '../Success/Success';
import Layout from '../Layout/Layout';


function App() {

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<FeelingPage />} />
            <Route path='/understanding' element={<UnderstandingPage />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/comments' element={<CommentsPage />} />
            <Route path='/review' element={<ReviewPage />} />
            <Route path='/success' element={<Success />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
