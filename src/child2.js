import React , {useContext} from 'react'
import {TestContext} from './test'

console.log(TestContext)
var {name} = useContext(TestContext);

function child2(){

    return(
        <h3>2.学习{name}的准备工作</h3>
    )
}

export default child2