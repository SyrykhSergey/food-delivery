import {applyMiddleware, combineReducers, createStore} from "redux";
import ThunkMiddleware from "redux-thunk";
import MenuReducer from "./MenuReducer";


let reducers = combineReducers({
    menu: MenuReducer,
    /**authentication: authenticationReducer,
    blogs : blogsReducer,**/

});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;