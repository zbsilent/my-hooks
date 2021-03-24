import React, { useEffect, useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  // 不传参数的情况下 不停渲染 componentDidMount /componentDidUpdate
  // useEffect(() => {
  //   console.log('组件挂载及更新状态')
  //   console.log(state)
  // })

  // [null]不依赖于任何值，只做一次操作 [state]通过state的监控，state发生变化就执行
  useEffect(() => {
    console.log("组件反复运行");
  });

  useEffect(() => {
    console.log("组件只运行一次");
  }, []);

  useEffect(() => {
    console.log("当前：" + state + ":原值" + (state - 1));
    console.log("组件根据state运行");
  }, [state]);

  //只运行一次在组件卸载掉时候
  useEffect(() => {
    return () => {
      console.log("组件挂卸载");
      console.log(state);
    };
  }, []);

  const click = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={click}>click</button>
    </div>
  );
};

export default App;
