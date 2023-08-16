import React from 'react';
import { useSelector } from 'react-redux';
import PlantInfo from './plantInfo';
import { useParams } from 'react-router';

function Card({props}) {

  let { plantID } = useParams()

  // const { plantID } = match.params
  const setPlant = parseInt(plantID)
  let plant = useSelector(state => 
    {
      debugger
    }
    )



  // if (!plant) {
  //   return (
  //       <section>
  //       <h2>Hmmm...The Plant You're Looking for Isn't Here.</h2>
  //     </section>
  //   )
  // }


  return(
   
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        {/* <p>{plant}</p> */}
        <PlantInfo props={plant}/>

      </div>
    </div>
  );
}

export default Card;