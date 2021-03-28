import React , { useState, useEffect } from "react";
import PubSub from 'pubsub-js';
import "./index.css";
const List = (props) => {

	const [user, setUser] = useState({
		users: [],//用户信息
		isFirst: true,//第一次打开页面
		isLoading: false,//是否加载
		err: "",//异常
	});
	// const x = "1";

	/**
	 * 这里为什么不用useEffect函数呢？因为setState本身不断的刷新函数界面 所以不需
	 * @param  {[type]} "atguigu" [description]
	 * @param  {[type]} (_,       data          [description]
	 * @return {[type]}           [description]
	 */
	const token = PubSub.subscribe("atguigu", (_, data) => {
			//console.log('数据长度'+data.users.length)
		setUser(data);
	})
	/**
	 * 这里其实本身就是执行一些副作用的操作，比如页面一加载就直接初始化数据什么 比如一些定时操作
	 * @param  {[type]} ( [description]
	 * @return {[type]}   [description]
	 */
	useEffect(() => {
		console.log('界面不停刷新');
	},[]);

	useEffect(() => {
		return () => {
			PubSub.unsubscribe(token);
		};
	},[]);

	//组件一放到页面就需要订阅消息


	const { users, isFirst, isLoading, err } = user;

	const doRenderInfo = () => {
		if (isFirst) {
			return <h2>欢迎使用，请输入关键字，随后点击搜索</h2>;
		} else if(isLoading){
			return <h2>Loadig....</h2>;
		}else if(err){
			return <h2 style={{color:"red"}}>{err}</h2>;
		}else{
			return users.map((userObj) => {
				return (
					<div className="card" key={userObj.id}>
						<a href={userObj.html_url} target="_blank" rel="noreferrer" >
							<img alt="head_portrait" src={userObj.avatar_url} style={{ width: "100px" }} />
						</a>
						<p className="card-text">{userObj.login}</p>
					</div>
				);
			});
		}
	};

	return <div className="row">{doRenderInfo()}</div>;
};

export default List;
