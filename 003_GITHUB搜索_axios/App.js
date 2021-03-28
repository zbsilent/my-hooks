import React, { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";

const App = (props) => {
	const [user, setUser] = useState({
		users: [],//用户信息
		isFirst: true,//第一次打开页面
		isLoading: false,//是否加载
		err: "",//异常
	});

	// const { users,isFirst ,isLoading,err} = user;
	// console.log("用户信息"+users);
	//更新APP状态
	const updateAppState = (stateObj) => {
		setUser(stateObj);
	};

	return (
		<div className="container">
			<Search updateAppState={updateAppState} />
			{/*<List user={user} />  */}
			<List {...user}/>
		</div>
	);
};

export default App;
