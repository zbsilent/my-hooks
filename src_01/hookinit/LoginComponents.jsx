import { useRef, useState } from "react";
const LoginComponents = () => {
    const [loginfo, setLoginfo] = useState({ username: "", password: "" });
    // const myNameRef = useRef();
    // const myPassRef = useRef();
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefalut();
        //event.preventDefalut(); //阻止表单提交
        // console.log(myNameRef,myPassRef);
        console.log(
            `你输入的用户名是：${loginfo.username},你输入的密码是：${loginfo.password}`
        );
    };

    {/* 
        const saveFormInfo = (param) => {
            return (event) => {
                //这里必须使用[] 拿去变量
                setLoginfo({ ...loginfo, [param]: event.target.value });
            };
        };
 
    */}
    const saveFormInfo = (param) => (event) => {
        // console.log(event.target.value);
        setLoginfo({ ...loginfo, [param]: event.target.value });
    };

    // const saveUsername = (event) => {
    //     console.log(event.target.value);
    //     setLoginfo({ ...loginfo, ["username"]: event.target.value });
    // };

    // //这里用到了动态设置useState的值的方法
    // const savePasswd = (event) => {
    //     console.log(event.target.value);
    //     setLoginfo({ ...loginfo, ["password"]: event.target.value });
    // };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                用户名:
                <input
                    onChange={saveFormInfo("username")}
                    type="text"
                    name="usernam"
                />
                密码:
                <input
                    onChange={saveFormInfo("password")}
                    tpye="password"
                    name="password"
                />
                <button>登陆</button>
            </form>
        </div>
    );
};
export default LoginComponents;
