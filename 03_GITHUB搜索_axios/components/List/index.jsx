import React, { useEffect } from "react";
import "./index.css";
const List = (props) => {
	console.log(props);
	const { users, isFirst, isLoading, err } = props;
	/*-----------------------------------------------------------------------*/
	// return (
	// 	<div className="row">
	// 		{items.map((userObj, index) => {
	// return (
	// 	<div className="card" key={userObj.id}>
	// 		<a href={userObj.html_url} target="_blank" rel="noreferrer" >
	// 			<img alt="head_portrait" src={userObj.avatar_url} style={{ width: "100px" }} />
	// 		</a>
	// 		<p className="card-text">{userObj.login}</p>
	// 	</div>
	// );
	// 		})}
	// 	</div>
	// );
	/*----------------------------------利用函数来写试试------------------------------*/

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
