import React from "react";
import Search from "./components/Search";
import List from "./components/List";

const App = (props) => {


	// const { users,isFirst ,isLoading,err} = user;
	// console.log("用户信息"+users);
	//更新APP状态
	// const updateAppState = (stateObj) => {
	// 	setUser(stateObj);
	// };

	return (
		<div className="container">
			<Search  />
			{/*<List user={user} />  */}
			<List />
		</div>
	);
};

export default App;
