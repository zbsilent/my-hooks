import {INCREMENT,DECREMENT} from './constant.js'
/**
 * 
 * @param {共享状态} data 
 * @returns 
 */
export const createIncrementAction = data=> ({type:INCREMENT,data});
export const createDecrementAction = data=> ({type:DECREMENT,data});

