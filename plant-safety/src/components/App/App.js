import './App.css';
import Card from '../Plants/plantcard';
import {BrowserRouter as Router, Route, Routes, Link, useMatches, Navigate, useNavigate} from 'react-router-dom';
import AllPlants from '../Plants/plantlist'
import Navbar from '../Nav/header';
import HomePage from '../Home/home';
import plantlist from '../Plants/plantlist';
import listedPlant from '../Plants/plantcard'
import SearchPage from '../SearchBar/searchPage'
import Error from '../Error/error';
import NotFound from '../Error/404Error'
// import ErrorBoundary from '../Error/errorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import { useErrorBoundary } from "react-error-boundary";
import { fetchPlants } from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";






function App() {
  const {showBoundary } = useErrorBoundary;
  const dispatch = useDispatch();
  useEffect(() => {
    const loadPlants = async () => {
      try {
      await dispatch(fetchPlants());
      } catch (err) {
        showBoundary(err)
      }
    };
    loadPlants();
  }, [dispatch]);

  return (
  
    <Router>
      <ErrorBoundary
      FallbackComponent={Error}
      >
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar/>
        </div>
      </header>

      <div className="App-body">

        </div>
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/plants' element={<AllPlants props={plantlist}/>} />
          <Route path="/plants/:plantID" element={<Card plant={listedPlant}/>} /> 
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/404-Not-Found' element={<NotFound />} />
          <Route path='*' element={< Navigate to="/404-Not-Found" replace />} />
        </Routes>

      
    </div>
    </ErrorBoundary>
    
    </Router>
    
  );
}

export default App;
