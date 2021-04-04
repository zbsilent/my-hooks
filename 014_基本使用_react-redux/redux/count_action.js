import {INCREMENT,DECREMENT} from './constant.js'
 
/**
 * action为Object
 * @param {共享状态} data 
 * @returns 
 */
export const createIncrementAction = data=> ({type:INCREMENT,data});
export const createDecrementAction = data=> ({type:DECREMENT,data});
/**
 * action也可以是函数，异步action
 * action为function 数组数值不能开启异步任务
 * 定时器，ajax
 */
// export const createIncrementAsyncAction = (data,timeout) =>{
//     // 第一层 undefined
//     //
//     return (dispatch)=>{
//         setTimeout(() => {
//             dispatch(createIncrementAction(data));
//         }, timeout);
//     }
export const createIncrementAsyncAction = (data,timeout) => (dispatch) =>{
    // 第一层 undefined
    //
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, timeout);
}
