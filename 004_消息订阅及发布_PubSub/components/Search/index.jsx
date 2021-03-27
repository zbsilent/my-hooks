import React, { useRef } from "react";
import PubSub from 'pubsub-js';
import axios from "axios";

const Search = (props) => {




	const inputRef = useRef();
	const search = () => {
		let { value: keyWord } = inputRef.current;
		//通知list
		/*props.updateAppState({isFirst:false,isLoading:true,users:[],err:''})*/
		PubSub.publish('atguigu',{isFirst:false,isLoading:true,users:[],err:''})
		axios
			.get("https://api.github.com/search/users", {
				params: { q: keyWord },
			})
			.then((response) => {
				 //props.updateAppState({isLoading:false,users:response.data.items,err:'',isFirst:false})
				//console.log(response.data);
				PubSub.publish('atguigu',{isLoading:false,users:response.data.items,err:'',isFirst:false})
			})
			.catch((error) => {
				/* props.updateAppState({isLoading:false,err:error.message,users:[],isFirst:false})*/
				PubSub.publish('atguigu',{isLoading:false,err:error.message,users:[],isFirst:false})
			})
			.finally(() => {
				// TODO
			});

		//PubSub.publish('atguigu',{a:'1',b:'2'})
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
