import {combineReducers,configureStore } from '@reduxjs/toolkit'
import  QuestionReducer  from './questionReducer'
import  ResultReducer  from './resultReducer'

const rootReducer = combineReducers({
    questions : QuestionReducer,
    result : ResultReducer
})

// create store with reducer 

// configureStore({reducer:rootReducer })

export default configureStore({reducer:rootReducer})