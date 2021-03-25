import { useState, useEffect } from "react";

const ChildNode = (props) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(props.visable);
  }, [props]);

  /*这个组件只关闭自己的显示*/

  function closeSelf() {
    // body...
    setState(false);
    props.action();
  }


  const uu = [];
  ["北京", "上海", "成都", "南昌"].forEach((value, index) => {
    uu.push(
      <li
        index={index}
        key={index}
        onMouseOver={closeSelf}
        style={{ display: state ? "block" : "none" }}
      >
        {value}
      </li>
    );
  });
  return <div>{uu}</div>;
};
export default ChildNode;
