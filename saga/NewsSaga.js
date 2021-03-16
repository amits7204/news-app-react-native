import {NEWS_GET_REQUEST, NEWS_GET_SUCCESS, NEWS_GET_FAILURE} from '../redux/actionType'
import {put, takeLatest, takeEvery, call, fork} from 'redux-saga/effects'

import getNews from './Api'
import {newsGetSuccess} from '../redux/actionCreator'

function* fetchNews(){
    try{
        const receivedNews = yield getNews()
        // console.log("RESPONSE: ", receivedNews)
        yield put(newsGetSuccess(receivedNews))
    }catch(err){
        yield put({type: NEWS_GET_FAILURE, err})
    }
}

function* watchGetNews(){
    yield takeLatest(NEWS_GET_REQUEST, fetchNews)
}

const newsSaga = [fork(watchGetNews)]

export default newsSaga