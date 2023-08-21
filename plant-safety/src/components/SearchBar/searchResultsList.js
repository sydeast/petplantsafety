import React from 'react';
import Card from '../Plants/plantcard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const SearchList = (props) => {
    
  if ( props.results === null || props.results.length <1 || props.results === undefined )  {
    return <div><p>Sorry, no results found. Please try again!</p></div>;
  } 
  
  return props.results.map((listedPlant) => {
    return (
      <div className="plant-wrapper" key={listedPlant.id}>
        <Link to={{
                    pathname:`/plants/${listedPlant.id}`}}
                    state={{ plant: {listedPlant} }}
                    >
                {listedPlant.name}
        </Link>              
      </div>

    )
  }
  )

}



const mapStateToProps = state => {
  return {
    searchResults: state.plants.searchResults
  }
}

export default connect(mapStateToProps)(SearchList);