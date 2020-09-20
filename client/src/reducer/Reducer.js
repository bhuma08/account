const initialState = {
    accessToken : []
}

function Reducer (state = initialState, action){
    switch (action.type){
        case "ADD_TOKEN" :
            const add = action.payload
            return {
                ...state, accessToken: [...state.accessToken, add]
            }
        default:
            return state;
    }
}

export default Reducer;