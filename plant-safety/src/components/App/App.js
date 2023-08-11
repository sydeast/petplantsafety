import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/search';
import Card from '../PlantCard/plantcard';
import {BrowserRouter as Router, Route, Routes, Link, useRouteMatch, useParams} from 'react-router-dom';

function App() {

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

        <Routes>
          {/* <Route path="/search"  element={<SearchBar />} /> */}
          <Route exact path='/plant/:plantID' element={<Card />} />
        </Routes>
      </div>
      
    </div>

    
    </Router>
  );
}

export default App;
