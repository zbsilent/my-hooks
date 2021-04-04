import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'


export const Count = (props) => {
    const myRef = useRef();
    const increment = () => {
        const { value } = myRef.current;
        props.increment(value)
    }
    const decrement = () => {
        const { value } = myRef.current;
        props.decrement(value)
    }
    const incrementIfOdd = () => {
        const { value } = myRef.current;
        if (props.count % 2 !== 0) {
            props.increment(value)
        }
    }
    const incrementAsync = () => {
        const { value } = myRef.current;
        props.incrementAsync(value, 2000)
    }
    console.log(props)
    return (
        <div>
            {/* 这里getState做初始化  利用Redux的第一个API*/}
            <h1>当前求和为：{props.count}</h1>
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
        </div>
    )
}



//第一次传递两个参数 必须是函数
export default connect(
    state => ({ count: state }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(Count)
