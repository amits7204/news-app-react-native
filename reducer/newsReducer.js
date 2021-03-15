import {NEWS_GET_REQUEST,
    NEWS_GET_SUCCESS,
    NEWS_GET_FAILURE} from '../redux/actionType'

export const initState = {
    // allData: [],
    isLoading: true
}    
const newsReducer = (state=initState, {type, payload})=>{
    console.log("Reducer Payload: ", payload)
    switch(type){
        case NEWS_GET_REQUEST:
            return {
                ...state,
            }
        case NEWS_GET_SUCCESS:
            console.log("Success:", payload)
            return{
                ...state,
                allData: payload,
                isLoading: false
            }  
        case NEWS_GET_FAILURE:
            console.log("Failure")
            return {
                ...state
            }      
        default:
            // console.log("default")
            return state;  
    }
}    

export default newsReducer