import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Test from '../test'
import Child1 from '../child1'
import Child2 from '../child2'

const RouterConfig = ()=>{
    return(
        <Router>
            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to="/child1/">子页1</Link>
                </li>
                <li>
                    <Link to="/child2/">子页2</Link>
                </li>
            </ul>
            <Route path='/' exact component={Test} />
            <Route path='/child1/' component={Child1} />
            <Route path='/child2/' component={Child2} />
        </Router>
    )
}

export default RouterConfig