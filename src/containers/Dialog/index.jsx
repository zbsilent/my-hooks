import React from 'react'
import {connect} from 'react-redux'
import {onDialog,offDialog} from '../../redux/actions/dialog'
const Dialog = (props) => {

    const show = ()=>{
         
        if(props.visable){
            props.close();
        }else{
            props.open();
        }
       
    }
    return (
        <div>
            <input type='text' style={{display:props.visable?'block':'none'}} placeholder='测试'></input>
            <button onClick={show}>打开/关闭</button>
        </div>
    )
}
export default connect(
    state => ({visable:state.visable}) ,
    {
        open:onDialog,
        close:offDialog
    }
)(Dialog);