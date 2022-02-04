export const fetchReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH":
            return {state: action.payload}
        case "DELETE":
            return {state: state.state.filter((one) => one.id !== action.payload)}
        case "ERROR":
            return {state:{error: action.payload}}
        default:
            return state
    }
}