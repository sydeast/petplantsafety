import React from "react";
import SearchBar from "../SearchBar/search";

const HomePage = () => {
    return (
      <div className="homepage">
        <header>
          <h1>My Simple Home Page</h1>
        </header>
        <main>
          <p>Welcome to my simple React home page.</p>
          <div className='search-component'>
          <SearchBar />
          <ul>
            {/* <li><Link to='/search'>search</Link></li> */}
          </ul>
        </div>
        </main>
      </div>
    );
  }
  
  export default HomePage;