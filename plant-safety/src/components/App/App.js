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
        <div className='home'>
          <p>osdjsojf</p>
        </div>


        <div className='all-list'>
          {/* <p>Click here to view a list of all plants.</p> */}
          {/* <Link to ='/plants'>Click here to view a list of all plants.</Link> */}
        </div>
        <Routes>
          {/* <Route path="/search"  element={<SearchBar />} /> */}
          <Route path="/plants/:plantID" element={<Card plant={listedPlant}/>} /> 
          {/* {match ? <Card match{match} />} */}
          {/* <Route exact path='/' element={} /> */}
          {/* <Route
            path="/plants/:plantID"
            render={({ match }) => <Card match={match} other="props" />}
          /> */}
          <Route path='/plants' element={<AllPlants props={plantlist}/>} />
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </div>
      
    </div>

    
    </Router>
  );
}

export default App;
