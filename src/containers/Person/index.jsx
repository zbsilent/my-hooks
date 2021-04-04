import React,{useRef} from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAaction} from '../../redux/actions/person'
const Person = (props)=> {

    const nameRef = useRef();
    const ageRef = useRef();

    const addPreson=()=>{
        const name = nameRef.current.value;
        const age =  ageRef.current.value;
        const PersonObj = {id:nanoid(),name,age}
        props.add(PersonObj);
        nameRef.current.value='';
        ageRef.current.value='';
    }
    return (
        <div>
            <h1>Perso...component</h1>
            <h1>上方：{props.count}</h1>
            <input type='text' placeholder='输入名字' ref={nameRef}></input>&nbsp;
            <input type='text' placeholder='输入年龄' ref={ageRef}></input>&nbsp;
            <button onClick={addPreson}>添加</button>&nbsp;
            <hr/>
            <ul>
                {/* <li>name1----age1</li>
                <li>name1----age1</li>
                <li>name1----age1</li> */}
                {
                    props.persons.map((per,index)=>{
                        return <li key={per.id}>{per.name}---{per.age}</li>

                    })
                }
            </ul>
        </div>
    )
}

export  default connect(
    state=>({
        persons:state.personArray,
        count:state.sumNumber
    }),
    {
       add: createAddPersonAaction
    }
)(Person)

 

