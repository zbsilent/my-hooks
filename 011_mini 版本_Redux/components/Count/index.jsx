import React,{useRef,useState} from 'react'
import store from '../../redux/store';//用于获取共享状态
const Count = (props) => {

    const [state, setState] = useState({carName:'bens'})//count做为共享状态，已经交给了redux管理

    const myRef = useRef();
    //console.log(myRef);
    // useEffect(() => {
    //    store.subscribe(()=>{//订阅监听Redux的变化
    //        setState({});
    //    });
    // })

    
    
    const increment =()=>{
        const {value} = myRef.current;
        //const {count} = state;
        //通知Redux进行共享状态处理，不进行页面刷新
        store.dispatch({type:'increment',data:value})
       // console.log(value);
       //setState({count:count+value*1});
    }
    const decrement=()=>{
        const {value} = myRef.current;
        
        store.dispatch({type:'decrement',data:value})

    }
    const incrementIfOdd=()=>{
        const {value} = myRef.current;
        const count = store.getState();
        if(count%2!==0){
            store.dispatch({type:'increment',data:value})
        } 
    }
    const incrementAsync=()=>{
        const {value} = myRef.current;
        setTimeout(()=>{
            store.dispatch({type:'increment',data:value})
        },500)
        
    }

    return (
        <div>
            {/* 这里getState做初始化  利用Redux的第一个API*/}
            <h1>当前求和为：{store.getState()}</h1>
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
