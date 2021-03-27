import React from "react";
import "./index.css";
const Footer = (props) => {
	const { todos,checkAll,clearAllDone } = props;
	const totle = todos.length;
	//pre 上次的返回值 current每一个todo
	const doenCount = todos.reduce(
		(pre, current) => pre + (current.done ? 1 : 0),
		0
	);

	const handleCheckAll=(event)=>{
		checkAll(event.target.checked);
	}
	const handleClearAll = () =>{
		clearAllDone();
	}

	console.log(doenCount);
	//defaultCheck只能指定一次
	return (
		<div className="todo-footer">
			<label>
				<input
					onChange={handleCheckAll}
					type="checkbox"
					checked={doenCount === totle && totle!==0 ? true : false}
				/>
			</label>
			<span>
				<span>已完成{doenCount}</span> / 全部{totle}
			</span>
			<button className="btn btn-danger" onClick={handleClearAll}>清除已完成任务</button>
		</div>
	);
};

export default Footer;
