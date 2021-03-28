import React from "react";
import {Link,BrowserRouter,HashRouter,Route} from 'react-router-dom'
import About from './pages/About'
import Home  from './pages/Home'
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
			        <Link className= "list-group-item" to="/about">About</Link>
			        <Link className= "list-group-item" to="/home">Home</Link>
		        </div>
		      </div>
		      <div className="col-xs-6">
		        <div className="panel">
		          <div className="panel-body">
		         	{/*注册路由*/}
			        <Route path="/about" component={About}/ >
			        <Route path="/home" component={Home}/ >
		          </div>
		        </div>
		      </div>
		    </div>
  		</div>
	);
};

export default App;
