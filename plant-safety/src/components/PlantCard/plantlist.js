import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPlants } from '../../actions/actions';
import PlantInfo from './plantInfo';


function AllPlants(props) {
 
 //const counter = useSelector((state) => state.counter)

   
    const allPlants = useSelector((state) => state.plants.plantsList)
    
    let listedPlants = allPlants.map((listedPlant, i) => <PlantInfo key={i} plant={listedPlant}/>)
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