import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
import { offDialog ,onDialog} from '../../redux/actions/dialog'


export const Count = (props) => {

    console.log(props)
    const myRef = useRef();

    const increment = () => {
        const { value } = myRef.current;
        props.createIncrementAction(value)
        console.log(props.count);
        //这里只能拿到已经存储到store里的值
    }
    const oD =()=>{
        props.offDialog();
    }
    const decrement = () => {
        const { value } = myRef.current;
        props.createDecrementAction(value)
    }
    const incrementIfOdd = () => {
        const { value } = myRef.current;
        if (props.count % 2 !== 0) {
            props.createIncrementAction(value)
        }
    }
    const incrementAsync = () => {
        const { value } = myRef.current;
        props.createIncrementAsyncAction(value, 2000)
    }
    return (
        <div>
            <h2>Count....Component</h2>
            {/* 这里getState做初始化  利用Redux的第一个API*/}
            <h1>当前求和为：{props.count}</h1>
            <h1>下方组件总人数为：{props.rs}</h1>
            <h1>开关的状态是:{props.visable?'开':'关'}</h1>
            <select ref={myRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>&nbsp;
            <button onClick={increment}>+</button>&nbsp;
            <button onClick={decrement}>-</button>&nbsp;
            <button onClick={incrementIfOdd}>当前求和为积数再加</button>&nbsp;
            <button onClick={incrementAsync}>异步加</button>
            <button onClick={oD}>关闭组件Dialog</button>&nbsp;
        </div>
    )
}



//第一次传递两个参数 必须是函数
export default connect(
    state => ({ 
        count: state.sumNumber,
        rs:state.personArray.length,
        visable:state.visable
    }),
    {
        createIncrementAction,
        createDecrementAction,
        createIncrementAsyncAction,
        offDialog,
        onDialog
    }
)(Count)
