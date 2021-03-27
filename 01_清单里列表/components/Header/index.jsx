import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import "./index.css";
const Header = (props) => {

	const { add } = props;
	//对接受的props进行，类型，必要性进行限制

	Header.propTypes ={
		add:PropTypes.func.isRequired,
	}
	//键盘事件的回调
	const handleKey = (event) => {
		const { keyCode, target } = event;
		if (keyCode !== 13) return;
		if (target.value.trim() === "") {
			alert("输入不能为空");
			return;
		}
		//解构赋值
		let pus = { id: nanoid(), name: target.value, done: true };
		add(pus);
		target.value = "";
		// console.log(target.value)
	};

	return (
		<div className="todo-header">
			<input
				type="text"
				placeholder="请输入你的任务名称，按回车键确认"
				onKeyUp={handleKey}
			/>
		</div>
	);
};

export default Header;
