import React from 'react';
import Card from '../Plants/plantcard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const SearchList = (props) => {

  
  
  if (!props.results) {
    return null;
  }

  // const filtered = props.plant.map(plant =>  <Card key={plant.id} plant={plant} />); 
  // return (
  //   <div>
  //     {filtered}
  //   </div>
  // );
  return props.results.map((listedPlant) => {
    return (
      <div className="plant-wrapper" key={listedPlant.id}>
        {/* <Link to="/plant/:plantID"><Card plant={listedPlant}/></Link>  */}
        <Link to={{
                    pathname:`/plants/${listedPlant.id}`}}
                    state={{ plant: {listedPlant} }}
                    >
                {listedPlant.name}
        </Link>
   
        {/* <strong> {plant.name} </strong> */}
              
      </div>

    )
  }
  )

}

const mapStateToProps = state => {
  return {
    searchResults: state
  }
}

export default connect(mapStateToProps)(SearchList);