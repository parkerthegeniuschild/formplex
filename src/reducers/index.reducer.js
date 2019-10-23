import { combineReducers } from "redux";
import userReducer from "./users.reducer";
// add more reducers here in future =====

export default combineReducers({
    user: userReducer,
});
