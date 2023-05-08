import React from 'react';
import axios from 'axios';
import './App.css';

import { Route, Routes } from 'react-router-dom';=
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import FeelingPage from '../FeelingPage/FeelingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import Layout from '../Layout/Layout';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/feeling' element={<FeelingPage />} />
            <Route path='/understanding' element={<UnderstandingPage />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/comments' element={<CommentsPage />} />
            <Route path='/review' element={<ReviewPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
