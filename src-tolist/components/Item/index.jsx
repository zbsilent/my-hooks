import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.css";
const Item = (props) => {
	const [state, setState] = useState({ mouse: false });

	const { id, name, done, updateInfo, delInfo } = props;
	const { mouse } = state;
	//checked typeof paramater
	Item.propTypes = {
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired,
		updateInfo: PropTypes.func.isRequired,
		delInfo: PropTypes.func.isRequired,
	};
	const handMouse = (flag) => () => {
		setState({ mouse: flag });
	};
	// function handChange(id){
	// 	return  function(event){
	// 		console.log(id,event.target.checked);
	// 	}
	// }

	const handChange = (id) => (event) => {
		updateInfo(id, event.target.checked);
	};
	// const handChange=(tt) =(event)=>{

	// 	console.log(tt,event.target.checked);
	// }
	const heanelDelete = (id) => {
		if (window.confirm("确定删除么")) {
			delInfo(id);
		}
	};
	return (
		<li
			style={{ backgroundColor: mouse ? "#ddd" : "white" }}
			onMouseLeave={handMouse(false)}
			onMouseEnter={handMouse(true)}
		>
			<label>
				<input
					type="checkbox"
					checked={done}
					onChange={handChange(id)}
				/>
				<span>{name}</span>
			</label>
			<button
				onClick={() => heanelDelete(id)}
				className="btn btn-danger"
				style={{ display: done ? "block" : "none" }}
			>
				删除
			</button>
		</li>
	);
};

export default Item;