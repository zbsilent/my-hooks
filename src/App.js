import React from "react";
import {NavLink,Route,Switch} from 'react-router-dom'
import About from './components/About'
import Home  from './components/Home'
import TestRouters  from './components/Home'
import './App.css'

const App = (props) => {


	return (
		<div>
		    <div className="row">
		      <div className="col-xs-offset-2 col-xs-8">
		        <div className="page-header"><h2>React Router Demo</h2></div>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-xs-2 col-xs-offset-2">
		        <div className="list-group">
			        {/*原生HTML靠a标签跳转*/}
			        {/*  <a className="list-group-item" href="./about.html">About</a>
			         <a className="list-group-item active" href="./home.html">Home</a>*/}

			        {/*React中靠路由链接切换组件 BrowserRouter(不出现#)&HashRouter*/}
			    	{/*编写路由链接*/}
			    	{/*设计理念问题 navlinke*/}
			        <NavLink activeClassName ='active' className= "list-group-item" to="/about">About</NavLink>
			        <NavLink activeClassName ='active' className= "list-group-item" to="/home">Home</NavLink>
			  		 {/*增加路由链接 就在导航栏告诉他 选择 则出现*/}
			        {/*<NavLink activeClassName ='active' className= "list-group-item" to="/home">TestRouters</NavLink>*/}

		        </div>
		      </div>
		      <div className="col-xs-6">
		        <div className="panel">
		          <div className="panel-body">
		         	{/*注册路由*/}
		         	<Switch>
				        <Route path="/about" component={About}/ >
				        <Route path="/home" component={Home}/ >
				    	{/*持续向下*/}
				        <Route path="/home" component={TestRouters}/ >
				    </Switch>
		          </div>
		        </div>
		      </div>
		    </div>
  		</div>
	);
};

export default App;
