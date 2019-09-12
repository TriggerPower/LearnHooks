import React , {createContext, useState} from 'react'
import Child1 from './child1'
import Child2 from './child2'

export let TestContext = createContext({});
function Test(){
    const [obj, setObj] = useState({
        skill: "react",
        count: 0
    })
    return(
        <div>
            <h1>react hooks</h1>
            <input type="text" onChange={(e)=>{setObj({...obj, skill: e.target.value})}} value={obj.skill}/>
            <button onClick={()=>{setObj({...obj, count: obj.count + 1})}}>打卡学习</button>
            <TestContext.Provider value={obj}>
                <Child1 />
                <Child2 />
            </TestContext.Provider>         
        </div>   
    )
}

export default Test