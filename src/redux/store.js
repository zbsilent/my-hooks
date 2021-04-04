import {createStore,applyMiddleware} from 'redux';//引入createStore，专门用于创建store对象 applyMiddleware执行中间件 combineReducers合并
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
import thunk from 'redux-thunk'


/**
 * 专门用于暴露store对象
 */
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
