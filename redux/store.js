import {createStore, applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'
import allReducer from '../reducer/index'

import rootSaga from '../saga/RootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
console.log("STORE: ", store.getState())
export default store