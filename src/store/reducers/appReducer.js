import actionTypes from "../action/actionTypes";

const initState = {
    homeData: [],
    test: 'Hello 123'
} 

const appReducer = (state = initState, aciton) => {
    switch (aciton.type) {
        case actionTypes.GET_HOME:
            return state
            break;
    
        default:
            return state
    }
}
export default appReducer