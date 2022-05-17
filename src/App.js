import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ProfileCard from './components/Profile/Profile';
import PeoplesCard from './components/PeopleList/PeoplesList';
import peopleApi from './api/peopleApi';
import './App.css';

const { getPeopleList } = peopleApi;

const App = () => {
  const [peopleData, setPeopleData] = useState([]);
  const getPeopleData = async () => {
    const data = await getPeopleList();

    if (data.status === 200) {
      setPeopleData(data.data);
    }
  };

  useEffect(() => {
    getPeopleData();
  }, []);

  return (
    <div>
      <Routes>
        <>
          <Route path="/" element={<PeoplesCard peopleData={peopleData} />} />
          <Route
            exact
            path="/profile/:userId"
            element={<ProfileCard peopleData={peopleData} />}
          />
        </>
      </Routes>
    </div>
  );
};

export default App;
