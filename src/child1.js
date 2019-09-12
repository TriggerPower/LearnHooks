import React, {useState, useEffect, useContext} from 'react'
import {TestContext} from './test'

const Child1 = ()=>{
    const obj = useContext(TestContext);
    useEffect(()=>{
        console.log("Child1----属性变化");
    },[obj.count])

    return(
        <div>
            <h3>1.学习要持之以恒, 总共学习了{obj.count}天 </h3>
        </div>
    )
}

export default Child1