import React from "react";
import PropTypes from 'prop-types';
import Item from "../Item/";
import "./index.css";
const List = (props) => {

	const {todos,updateInfo,delInfo} = props;

	List.propTypes ={
		todos:PropTypes.array.isRequired,
		updateInfo:PropTypes.func.isRequired,
		delInfo:PropTypes.func.isRequired,
	}

	 console.log(props);
	 let oli = [];

	todos.map((todo, index) => {
		return oli.push(<Item key={index} {...todo} updateInfo={updateInfo} delInfo={delInfo}/>);
	});

	return <ul className="todo-main">{oli}</ul>;
};

export default List;
