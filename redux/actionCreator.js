import {NEWS_GET_REQUEST,
    NEWS_GET_SUCCESS,
    NEWS_GET_FAILURE} from './actionType'

export const newsGetRequest = (payload) =>{
    return {
        type: NEWS_GET_REQUEST,
        payload
    }
} 

export const newsGetSuccess = (payload) =>{
    return {
        type: NEWS_GET_SUCCESS,
        payload
    }
} 

export const newsGetFailed = (payload) =>{
    return {
        type: NEWS_GET_FAILURE,
        payload
    }
} 

