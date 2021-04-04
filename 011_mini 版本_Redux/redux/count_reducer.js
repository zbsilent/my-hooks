/**
 *为Count组件服务的Reducer,Reducer只做基础动作
 * @param {过去的值} preState 
 * @param {动作对象} action 
 */
const initState=0;

export default function CountReducer (preState=initState, action){
    console.log(preState,action);
     //从动作对象中获取 type，data
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return Number(preState) + Number(data);
        //break;
        case 'decrement':
            return Number(preState) - Number(data);
        default://初始化状态 preState 为null
            return preState;
    }
}