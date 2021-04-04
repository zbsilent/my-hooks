import React,{useRef,useState} from 'react'
 
const Count = (props) => {

    const [state, setState] = useState({count:0})

    const myRef = useRef();
    console.log(myRef);
    
    const increment =()=>{
        const {value} = myRef.current;
        const {count} = state;
        setState({count:count+value*1});
       // console.log(value);
    }
    const decrement=()=>{
        const {value} = myRef.current;
        const {count} = state;
        setState({count:count-value*1});

    }
    const incrementIfOdd=()=>{
        const {value} = myRef.current;
        const {count} = state;
        if(count%2!==0){
            setState({count:count+value*1});
        } 
    }
    const incrementAsync=()=>{
        const {value} = myRef.current;
        const {count} = state;
        setTimeout(()=>{
            setState({count:count+value*1});
        },500)
        
    }

    return (
        <div>
            <h1>当前求和为：{state.count}</h1>
            <select  ref={myRef}>
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
export  default Count;
