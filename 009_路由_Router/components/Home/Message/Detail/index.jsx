import React from 'react'
//import qs from 'querystring'

const Detail = (props) => {
    console.log(props);
    //?id=03&title=消息3
    const xx = [{ 'id': '01', 'content': 'hello vue' },
    { 'id': '02', 'content': 'hello react' },
    { 'id': '03', 'content': 'hello node' }
    ]
    // 接受params参数
    // const { id, title } = props.match.params;
   // const {search} = props.location;

   //const {id,title} = qs.parse(search).slice(1);
    const {id,title} = props.location.state;


        const res =  xx.find((detailObj)=>{
            return detailObj.id === id;
        })

  
    return (
        <ul>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            <li>Content:{res.content}</li>
        </ul>
    )
}
export default Detail;