import React from 'react';
import Card from '../PlantCard/plantcard';

function SearchList({ filteredPlants }) {
  const filtered = filteredPlants.map(plant =>  <Card key={plant.id} plant={plant} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;