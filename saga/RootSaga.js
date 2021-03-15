import {all, fork} from 'redux-saga/effects'
import newsSaga from './NewsSaga'


export default function* rootSaga(){
    console.log("***ROOTSAGA***")
    yield all(newsSaga)
}