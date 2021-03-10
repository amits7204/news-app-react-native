import {NEWS_GET_REQUEST,
    NEWS_GET_SUCCESS,
    NEWS_GET_FAILURE} from '../redux/actionType'

const initState = {
    allData: [],
    isLoading: true
}    
export const newsReducer = (state=initState, {type, payload})=>{
    console.log("Reducer Payload: ", payload)
    switch(type){
        case NEWS_GET_REQUEST :
            return{
                ...state,
            }
        case NEWS_GET_SUCCESS :
            return{
                ...state,
                allData: payload,
                isLoading: false
            }  
        case NEWS_GET_FAILURE :
            return{
                ...state
            }      
        default:
            return state    
    }
}    

export default newsReducer