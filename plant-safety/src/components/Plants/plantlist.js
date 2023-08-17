import React, { useEffect } from 'react'
// import { connect } from 'react-redux';
import { useSelector, connect } from 'react-redux';
import { fetchPlants } from '../../actions/actions';
import PlantInfo from './plantInfo';
import { Link, useNavigate } from 'react-router-dom';


function AllPlants({plantList}) {
 
 //const counter = useSelector((state) => state.counter)

   
    const allPlants = useSelector((state) => state.plants.plantsList)
    
    let listedPlants = allPlants.map((listedPlant, i) => 
     <div className='listed-plants' key={i}>

            <li key={listedPlant.id}>
                <Link to={{
                    pathname:`/plants/${listedPlant.id}`}}
                    state={{ plant: {listedPlant} }}
                    >
                {listedPlant.name}
                </Link>
                </li>
     </div>
      
    )
    // <PlantInfo key={i} plant={listedPlant}/>);
    //<div className="drink-wrapper">

    return(
        <div className='plant-list'>
            {listedPlants}
        </div>
    )
    

}

// const mapStateToProps = ({
//     plants: plants.plantsList
// })
export default connect()(AllPlants);