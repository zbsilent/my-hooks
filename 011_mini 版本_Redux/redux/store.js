import {createStore} from 'redux';//引入createStore，专门用于创建store对象
import CountReducer from './count_reducer' //一般默认暴露 不用{}
/**
 * 专门用于暴露store对象
 */
export default createStore(CountReducer)
