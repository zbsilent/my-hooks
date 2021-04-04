import {ADD_PERSON} from '../../redux/constant'

/**
 * 创建一个人
 * @param {*} personObj 
 * @returns 
 */
export const createAddPersonAaction = (personObj)=>({type:ADD_PERSON,data:personObj})