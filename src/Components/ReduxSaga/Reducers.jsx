export const fetchReducer = (state, action) => {
    switch(action.type){
        case "FETCH":
            return action.payload;
        case "ERROR":
            return {error: action.payload};
        case "DELETE":
            const data = state.filter((one) => one.id !== action.payload);
            return data
        default:
            return state;
    }
}