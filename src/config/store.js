import {combineReducers, createStore} from "redux";
import playerReducer from "../model/player/reducer"

const rootReducer = combineReducers(
    {
        player: playerReducer,
    })

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
