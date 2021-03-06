import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GparentNode from "./hookinit/GparentNode.js";
import LoginComponents from "./hookinit/LoginComponents.jsx";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LoginComponents />
  </React.StrictMode>,
  document.getElementById("root")
);
// setTimeout(()=>{
// 	ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// },10000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
