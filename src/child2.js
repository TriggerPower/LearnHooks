import React , {useContext, useEffect} from 'react'
import {TestContext} from './test'

const Child2 = ()=>{
    let obj = useContext(TestContext);

    useEffect(()=>{
        console.log("Child2----属性发生变化")
    },[obj.skill])
    
    return(
        <h3>2.学习{obj.skill}的准备工作</h3>
    )
}

export default Child2