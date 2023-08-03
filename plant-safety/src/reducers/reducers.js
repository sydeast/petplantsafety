const reducer = (state = [], action) => {
    switch(action.type){
        case "SET_PLANT":
            return [...action.payload]
        case "FIND_PLANT":
            return { ...state, searchResults: [...action.payload] }
        default:
            return state
    }
}

export default reducer