/**
 * 汇总reducers
 */
 import {combineReducers} from 'redux';//引入createStore，专门用于创建store对象 applyMiddleware执行中间件 combineReducers合并

 import {personReducer} from './person'
 import {dialogReducer} from './dialog'
 import countReducer from './count' //一般默认暴露 不用{}

 /**
 * 合并Reducer
 */
export default combineReducers({sumNumber:countReducer,personArray:personReducer,visable:dialogReducer})