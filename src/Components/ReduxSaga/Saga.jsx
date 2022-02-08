import axios from 'axios'
import {put, takeEvery, takeLatest} from 'redux-saga/effects'

function* fetchData(action){
    try{
        const data = yield axios.get("https://jsonplaceholder.typicode.com/users")
        yield put({type: "FETCH", payload: data.data})
    }
    catch(e){
        yield put({type: "ERROR", payload: e.message})
    }
}

function* deleteData(action){
    try{
        yield put({type: "DELETE", payload: action.payload})
    }
    catch(e){
        yield put({type: "ERROR", payload: e.message})
    }
}

export function* mySaga() {
    yield takeLatest("API_REQUEST", fetchData) 
    yield takeEvery("DELETE_DATA", deleteData)
}