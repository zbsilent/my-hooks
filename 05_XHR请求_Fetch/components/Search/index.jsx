import React, { useRef } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

const Search = (props) => {
	const inputRef = useRef();

	const search = async() => {

		let { value: keyWord } = inputRef.current;
		//通知list
		/*props.updateAppState({isFirst:false,isLoading:true,users:[],err:''})*/
		PubSub.publish("atguigu", {
			isFirst: false,
			isLoading: true,
			users: [],
			err: "",
		});
		//#region
		// axios
		// 	.get("https://api.github.com/search/users", {
		// 		params: { q: keyWord },
		// 	})
		// 	.then((response) => {
		// 		 //props.updateAppState({isLoading:false,users:response.data.items,err:'',isFirst:false})
		// 		//console.log(response.data);
		// 		PubSub.publish('atguigu',{isLoading:false,users:response.data.items,err:'',isFirst:false})
		// 	})
		// 	.catch((error) => {
		// 		/* props.updateAppState({isLoading:false,err:error.message,users:[],isFirst:false})*/
		// 		PubSub.publish('atguigu',{isLoading:false,err:error.message,users:[],isFirst:false})
		// 	})
		// 	.finally(() => {
		// 		// TODO
		// 	});
		//#endregion
		//PubSub.publish('atguigu',{a:'1',b:'2'})



		/**
		 * response.status     //=> number 100–599
		 * response.statusText //=> String
		 * response.headers    //=> Headers
		 * response.url        //=> String
		 * Promis实例可以then
		 * @param  {Function} `https:		.then((Response) [description]
		 * @return {[type]}                             [description]
		 */
		// fetch(`https://api.github.com/search/users?q=${keyWord}`) //联系服务器成功了
		// 	.then((Response) => {
		// 		console.log("服务器联系上了", Response);
		// 		return Response.json();
		// 	})
		// 	.then((Response) => {
		// 		console.log("获取数据成功了", Response);
		// 	})
		// 	.catch((error) => {
		// 		console.log("获取数据失败了", error);
		// 	});
		//
		try{
			const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
			console.log(response);
			const data  = await response.json();
			PubSub.publish('atguigu',{isLoading:false,users:data.items,err:'',isFirst:false})
			console.log(data);
		}catch(error){
			console.log('请求出错'+error.message);
			PubSub.publish('atguigu',{isLoading:false,err:error.message,users:[],isFirst:false})
		}

	};

	return (
		<section className="jumbotron">
			<h3 className="jumbotron-heading">搜索Git Hub用户</h3>
			<div>
				<input
					//ref={inputRef}
					ref={inputRef}
					type="text"
					placeholder="enter the name you search"
				/>
				&nbsp;<button onClick={search}>Search</button>
			</div>
		</section>
	);
};

export default Search;
