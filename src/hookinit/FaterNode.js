import React, { useEffect, useState } from "react";
import ChildNode from "../hookinit/ChildNode.jsx";
uses
const FaterNode = (props) => {
  const [visable, setVisable] = useState(false);
  const [itemVisable, setItemVisable] = useState(false);

  /*这里的生命周期函数监控参数变化，将变化的参数给状态，只要发生更新就给*/

  //console.log("B全局变量1:" + props.value);
  useEffect(() => {
    setVisable(props.visable);
    //console.log("B生命周期函数在变化:" + props.value);
  }, [props]);

  const clearChild = () => {
    setVisable(false);
    setItemVisable(false);
    props.action();
    //console.log("B调用到了自己的清除函数");
  };

  // 必须修改上级组件状态值
  const clearItme = () => {
    setItemVisable(false);
  };

  return (
    <div>
      <input
        readOnly={true}
        type="text"
        value={visable === false ? "未打开插件" : "已打开子插件"}
        style={{ display: visable ? "none" : "block" }}
      ></input>
      <button
        style={{
          display: visable ? "block" : "none",
          backgroundColor: "green"
        }}
      >
        子组件窗口界面显示,请点击操作关闭
      </button>
      <button onClick={() => props.action()}>
        子组件调用父组件节点关闭事件
      </button>
      <button
        onClick={clearChild}
        style={{ display: visable ? "block" : "none" }}
        onMouseOver={() => setItemVisable(true)}
      >
        子组点击关闭抽屉，移动上去打开列表
      </button>
      <ChildNode visable={itemVisable} action={clearItme} />
    </div>
  );
};
export default FaterNode;
