import React, {useState} from 'react';
import SearchList from './searchlist';
import Scroll from './scrolltemp';

function Search ({details}) {
  // <div className="Search">
  //   <p> here her here</p>
  // </div>

  // use state
  const [searchField, setSearchField] = useState("");

  //
  const filteredPlants = details.filter (
    plant => {
      return (
        plant.name.toLowerCase().includes(searchField.toLowerCase) || plant.scientific_name.toLowerCase().includes(searchField.toLowerCase) || plant.additional_names.toLowerCase().includes(searchField.toLowerCase)
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPlants={filteredPlants} />
      </Scroll>
    )

  };

  return (
    <section className="garamond">
    <div className="navy georgia ma0 grow">
      <h2 className="f2">Search your course</h2>
    </div>
    <div className="pa2">
      <input 
        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
        type = "search" 
        placeholder = "Search People" 
        onChange = {handleChange}
      />
    </div>
    {searchList()}
  </section>
  )


}

export default Search;