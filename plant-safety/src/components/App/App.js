import './App.css';
import Card from '../Plants/plantcard';
import {BrowserRouter as Router, Route, Routes, Link, useMatches} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchPlants } from '../../actions/actions';
import { useEffect, useState } from 'react';
import AllPlants from '../Plants/plantlist'
import Navbar from '../Nav/header';
import HomePage from '../Home/home';
import plantlist from '../Plants/plantlist';
import listedPlant from '../Plants/plantcard'
import SearchPage from '../SearchBar/searchPage'
import Error from '../Error/error'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadPlants = async () => {

      await dispatch(fetchPlants());

    };
    loadPlants();
  }, [dispatch]);

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar/>
        </div>
      </header>

      <div className="App-body">

        </div>
        <Routes>
          <Route path="/plants/:plantID" element={<Card plant={listedPlant}/>} /> 
          <Route path='/plants' element={<AllPlants props={plantlist}/>} />
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/error' element={<Error/>} />
        </Routes>

      
    </div>

    
    </Router>
  );
}

export default App;
