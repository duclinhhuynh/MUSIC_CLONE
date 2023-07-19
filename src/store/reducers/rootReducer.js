import appReducer from "./appReducer";
import { CombinedState, applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({
    app: appReducer,
})

export default rootReducer