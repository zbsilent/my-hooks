import { useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Detail from './Detail'
const Message = () => {
    const [state, setstate] = useState({ messageArr: [{ id: '01', title: '消息1' }, { id: '02', title: '消息2' }, { id: '03', title: '消息3' }] });

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
                                <Link to= {{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>&nbsp;&nbsp;

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