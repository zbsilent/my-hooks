import {INCREMENT,DECREMENT} from '../../redux/constant'

/**
 *为Count组件服务的Reducer,Reducer只做基础动作
 * @param {过去的值} preState 
 * @param {动作对象} action 
 */
const initState=0;

export default function countReducer (preState=initState, action){
    
     //从动作对象中获取 type，data
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return Number(preState) + Number(data);
        //break;
        case DECREMENT:
            return Number(preState) - Number(data);
        default://初始化状态 preState 为null
            return preState;
    }
}