import axios from "axios"

export const fetchData = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            dispatch({
                type: "FETCH",
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: "ERROR",
                payload: error.message
            })
        })
    }
}
export const deleteData = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}