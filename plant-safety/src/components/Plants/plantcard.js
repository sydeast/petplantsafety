import React from 'react';
import { useSelector } from 'react-redux';
import PlantInfo from './plantInfo';
import { useParams, useLocation, Link } from 'react-router';

function Card(props) {
  const location = useLocation()
  console.log(location.state.plant.listedPlant)
  let plantInfo = location.state.plant.listedPlant



  return(
    
   
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        {/* <p>{plant}</p> */}
        <PlantInfo plant={plantInfo}/>
        shit else

      </div>
    </div>
  );
}



export default Card;