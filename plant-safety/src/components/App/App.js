import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/search';
import Card from '../PlantCard/plantcard';
import {BrowserRouter as Router, Route, Routes, Link, useMatches} from 'react-router-dom';
import PlantInfo from '../PlantCard/plantInfo';
import { useSelector, useDispatch } from "react-redux";
import { fetchPlants } from '../../actions/actions';
import { useEffect, useState } from 'react';
import Plantlist from '../PlantCard/plantlist';
import plantlist from '../PlantCard/plantlist';

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
          <p>This is just a placement</p>
        </div>
      </header>

      <div className="App-body">
        <div className='search-component'>
          <SearchBar />
          <ul>
            {/* <li><Link to='/search'>search</Link></li> */}
          </ul>
        </div>

        <div className='all-list'>
          {/* <p>Click here to view a list of all plants.</p> */}
          {/* <Link to ='/plants'>Click here to view a list of all plants.</Link> */}
        </div>
        <Routes>
          {/* <Route path="/search"  element={<SearchBar />} /> */}
          <Route path="/plant/:plantID" element={<Card props={useMatches}/>} /> 
          {/* {match ? <Card match{match} />} */}
          {/* <Route exact path='/' element={} /> */}
          {/* <Route
            path="/plants/:plantID"
            render={({ match }) => <Card match={match} other="props" />}
          /> */}
          <Route path='/plants' element={<Plantlist props={plantlist} />} />
          
        </Routes>
      </div>
      
    </div>

    
    </Router>
  );
}

export default App;
