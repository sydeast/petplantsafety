import React from 'react';
import Card from '../PlantCard/plantcard';
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
  return props.results.map((plant) => {
    return (
      <div className="plant-wrapper" key={plant.id}>
   
        {/* <strong> {plant.name} </strong> */}
        <Card plant={plant} key={plant.id}>{plant.name}</Card>
              
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