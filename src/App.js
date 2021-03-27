import React from "react";
import axios from "axios";

const App = (props) => {
	//这里要特别注意ip地址的坑  localhost 和 127.0.0.1不一样
	const getInfo = (url) => {
		let uri ='';
		if(url ==='s' ){
			uri = "http://localhost:3000/students";
		}else{
			uri = "http://localhost:3000/cars";
		}
		axios.get(uri).then(
			(response) => {
				console.log(response.data);
			},
			(error) => {
				console.log(error);
			}
		);
	};
	return (
		<div>
			<button onClick={()=>getInfo('s')}>click me</button>
			<button onClick={()=>getInfo('c')}>click me</button>
		</div>


	);
};

export default App;
