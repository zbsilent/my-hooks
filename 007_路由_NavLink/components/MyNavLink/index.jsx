import React from "react";
import { NavLink, BrowserRouter, HashRouter, Route } from "react-router-dom";

const MyNavLink = (props) => {
	const {title,children} = props;
	console.log(props);
	return (
		<NavLink activeClassName="active" className="list-group-item" {...props} />
	);
};

export default MyNavLink;
