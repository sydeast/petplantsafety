import React from "react";
import SearchBar from "../SearchBar/search";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div className="homepage">
        <header>
          <h1>My Simple Home Page</h1>
        </header>
        <main>
          <p>Welcome to my simple React home page.</p>
          <div className='search-component'>
            <ul>
                <li>          <Link to='/search'>Click here to Search for a specific plant</Link></li>
                <li>          <Link to='/plants'>Click here to View All Plants</Link></li>
            </ul>

          <ul>
            {/* <li><Link to='/search'>search</Link></li> */}
          </ul>
        </div>
        </main>
      </div>
    );
  }
  
  export default HomePage;