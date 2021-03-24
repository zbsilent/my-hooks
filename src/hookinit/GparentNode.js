import FaterNode from "../hookinit/FaterNode.js";
import React, { useState, useEffect } from "react";

const GparentNode = () => {
  /* 这里如果要获取当前28换行的值，最好的办法就是 利用 const inputRefs = useRef();
	然后在事件里 传值 inputRefs.current.value即可*/

  const [inputValue, setInputValue] = useState(false);

  useEffect(() => {
    console.log("父组件依然在渲染");
  });

  const click = () => {
    //可以利用ref传值
    setInputValue(true);
    console.log("Aref获取值:" + inputValue);
  };

  /*因为子组件的显示状态由上级控制传递，如果清除了子组件不在此清除主组件的状态那么就是关不掉*/

  const clear = () => {
    setInputValue(false);
  };

  // console.log("A全局的inputValue:" + inputValue);
  return (
    <div style={{ float: "left", margin: "10px", display: "" }}>
      {/*<input type="text" ref={inputRefs}></input>*/}
      <button
        onClick={click}
        style={{ display: inputValue ? "none" : "block" }}
      >
        加载数据
      </button>
      <FaterNode visable={inputValue} action={clear} />
    </div>
  );
};
export default GparentNode;
