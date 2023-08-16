import React from "react";
import SearchBar from "../SearchBar/search";

const SearchPage = () => {
    return (
      <div className="SearchPage">
        <header>
          <h1>My Simple Search Page</h1>
        </header>
        <main>
          <p>Welcome to my simple React search page.</p>
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
  
  export default SearchPage;