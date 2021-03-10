import {createStore, applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'
import reducer from '../reducer/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

