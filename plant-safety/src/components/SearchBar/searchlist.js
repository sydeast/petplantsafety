import React from 'react';
import Card from '../PlantCard/plantcard';
import { connect } from 'react-redux';

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
      <div className="plant-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <strong> {plant.name} </strong>
            </div>

            </div>
          </div>
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