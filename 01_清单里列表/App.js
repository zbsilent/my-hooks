import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	const [state, setState] = useState({
		todos: [
			{ id: "001", name: "吃饭", done: true },
			{ id: "002", name: "睡觉", done: true },
			{ id: "003", name: "写代码", done: false },
		],
	});

	/*
		const a = "1";
	 函数组件是没有state的 所以也没有生命周期
	 这里第二个参数为null 组件不渲染了
	 参数如果不为空，且监控参数并不改变的，组件也不渲染了
	 如果没参数那组件就只渲染一次*/
	useEffect(() => {
		console.log("didmout/didupdate");
	}, []);

	// 这里做结构赋值
	const { todos } = state;
	//向todo传递数据 接收到参数是todo对象
	//这里一定注意todos结构附值后的数据本来就是数组，而这里是个对象
	const addInfo = (prop) => {
		let newtodos = [prop, ...todos];
		setState({ todos: newtodos });
	};
	//del todo
	const delInfo =(id) =>{
		//filter this object
		let newtodos =todos.filter((todObj)=>{
			return todObj.id!==id ;
		});
		//setState
		setState({todos:newtodos});
	}

	const updateInfo = (id, done) => {
		let newtodos = todos.map((todObj) => {
			if (todObj.id === id) return { ...todObj, done: done };
			else return todObj;
		});
		//let newtodos = [prop,...todos];
		setState({ todos: newtodos });
	};
	/**
	 * 这里是修改属性
	 * @param  {bool} flag 传入的属性值
	 * @return {object}  state
	 */
    const checkAll = (flag) =>{
    	let newtodos = todos.map((todObj)=>{
    		return {...todObj,done:flag }
    	});
    	setState({ todos: newtodos });
    }
    /**
     * [这里是过滤掉属性true掉]
     * @return {[type]} [description]
     */
     const clearAllDone = () =>{
    	let newtodos = todos.filter((todObj)=>{
    		return !todObj.done;
    	});
    	setState({ todos: newtodos });
    }

	return (
		<div className="todo-container">
			<div className="todo-wrap">
				<Header add={addInfo} />
				<List todos={todos} updateInfo={updateInfo} delInfo={delInfo}/>
				<Footer todos={todos} checkAll={checkAll} clearAllDone={clearAllDone}/>
			</div>
			<input type="button" onClick={() => alert(1)} value="xxx" />
		</div>
	);
};

export default App;
