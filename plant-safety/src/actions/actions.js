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

export const searchPlants = plants => {

    return(dispatch) => {
        // debugger
        return fetch(`http://127.0.0.1:3000/api/search?q=${plants.charAt(0).toUpperCase()+plants.slice(1).toLowerCase()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({plants})
        })
        .then(resp => resp.json())
        .then(plants => {
            console.log("plants", plants)
            dispatch({ type: "FIND_PLANTS", payload: plants })
        })
    }
}