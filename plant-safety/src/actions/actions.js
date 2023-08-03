export const fetchPlants = () => {
    return(dispatch) => {
        return fetch(`http://127.0.0.1:3000/api/plants`)
        .then(resp => resp.json())
        .then(plants => {
            dispatch({ type: 'SET_PLANT', payload: plants})
        })
        // .catch((error) => console.log('error', error));
    }
}

export const searchPlants = plant => {

    return(dispatch) => {
        // debugger
        return fetch(`http://127.0.0.1:3000/api/search?q=${plant.charAt(0).toUpperCase()+plant.slice(1).toLowerCase()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({plant})
        })
        .then(resp => resp.json())
        .then(plant => {
            console.log("plants", plant)
            dispatch({ type: "FIND_PLANT", payload: plant })
        })
    }
}