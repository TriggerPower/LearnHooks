import React , {createContext} from 'react'
import Child1 from './child1'
import Child2 from './child2'

export let TestContext = createContext(null);
function Test(){
    return(
        <div>
            <h1>react hooks</h1>
            <TestContext.Provider value={{name: 'react'}}>
                <Child1 />
                <Child2 />
            </TestContext.Provider>         
        </div>   
    )
}

export default Test