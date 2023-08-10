// import {SET_PLANT, FIND_PLANT} from '../actions/actions';
import * as ActionTypes from '../actions/actions';

const initialState = {
    searchResults: []
};


const plants = (state = initialState, action) => {
    switch(action.type){
        case "SET_PLANT":
            return [...action.payload]
        case "FIND_PLANTS":
            return { ...state, searchResults: [...action.payload] }
        default:
            return state
    }
}



export default plants