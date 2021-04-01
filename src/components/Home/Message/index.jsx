import { useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Detail from './Detail'
const Message = (props) => {
    const [state, setstate] = useState({ messageArr: [{ id: '01', title: '消息1' }, { id: '02', title: '消息2' }, { id: '03', title: '消息3' }] });
   
    const handleClick = (action,param) => {
        //replace跳转 路由组件的API文档
        //props.history.replace(`/home/message/detail/${id}/${title}`);
        //props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
        if(action){
            props.history.push('/home/message/detail',param);
        }else{
            props.history.replace('/home/message/detail',param);
        }
           

    }
    const handleClick3 =(action,param) =>{

        return function(){
            if(action){
                props.history.push('/home/message/detail',param);
            }else{
                props.history.replace('/home/message/detail',param);
            }
        }
    }
    const handleClick2 =(action,param) => () => {
        //replace跳转 路由组件的API文档
        //props.history.replace(`/home/message/detail/${id}/${title}`);
        //props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
        if(action){
            props.history.push('/home/message/detail',param);
        }else{
            props.history.replace('/home/message/detail',param);
        }
           

    }

    const handleClick4 =(action,param) => {
        //replace跳转 路由组件的API文档
        //props.history.replace(`/home/message/detail/${id}/${title}`);
        //props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
        if(action){
            props.history.push('/home/message/detail',param);
        }else{
            props.history.replace('/home/message/detail',param);
        }
           

    }
    
    console.log(props);
    const { messageArr } = state;
    return (
        <div>
            <ul>
                {
                    messageArr.map((messageObj, index) => {
                        return (
                            <li key={messageObj.id}>
                                {/* 携带param参数，向路由组件传递 */}
                                {/* <Link to= {`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp; */}
                                {/* 传递search参数*/}
                                {/* <Link to= {`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp; */}
                                {/* state参数 地址栏隐藏*/}
                                {/* onClick中的第一个参数是click事件。如果您需要其他参数，也可以通过它onClick={(event) => this.toggle(event, myParam)} */}
                                <Link to= {{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>&nbsp;&nbsp;
                                &nbsp;<button onClick={() => handleClick(true,{id:messageObj.id,title:messageObj.title})}>push查看</button>
                                 &nbsp;<button onClick={handleClick2(true,{id:messageObj.id,title:messageObj.title})}>测试查看</button>
                                 &nbsp;<button onClick={handleClick4('replace',{id:messageObj.id,title:messageObj.title})}>replace查看</button> 
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <Switch>
                {/* 申明接收 1. 携带params参数 */}
                {/* <Route path="/home/message/Detail/:id/:title" component={Detail} /> */}
                {/* 申明接收 2. 携带search参数 无需*/}
                {/* <Route path="/home/message/detail/" component={Detail} /> */}
                {/* state参数 无需处理*/}
                <Route path="/home/message/detail/" component={Detail} />
            </Switch>
        </div>
    )
}
export default Message;