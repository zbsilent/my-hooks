import React from "react";
import { NavLink, Route, Switch,Redirect } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
// import TestRouters  from './components/Home'
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
						<NavLink activeClassName='active' className="list-group-item" to="/island/about">About</NavLink>
						<NavLink activeClassName='active' className="list-group-item" to="/island/home">Home</NavLink>
						{/*增加路由链接 就在导航栏告诉他 选择 则出现*/}
						{/*<NavLink activeClassName ='active' className= "list-group-item" to="/home">TestRouters</NavLink>*/}

						{/* ###  模糊匹配 给多了没那么多无所谓 要的东西一个都不能少
						*1* 路由注册时候用exact方式 就可以严格匹配了 
						*2* 输入的路径必须包含【匹配的路径】 且顺序要一致
						<NavLink activeClassName='active' className="list-group-item" to="/island/home/a/b">Home</NavLink> */}
						
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
							{/*注册路由*/}
							<Switch>
								{/* 刷新后丢了css样式  路径丢了  http://localhost:3000/island/css/...*/}
								 {/* 1.0 取消html下的. 即取消当前文件夹下的即可  
								 2.0 %PUBLIC_URL$  绝对路径
								 3.0 HashRouter搞定*/}

								<Route exact={true} path="/island/about" component={About} />
								<Route exact path="/island/home" component={Home} />
								{/*持续向下*/}

								{/* <Route path="/home" component={TestRouters}/ > */}
								{/* ### Redirect 重定向 */}
								<Redirect to="/about" />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
