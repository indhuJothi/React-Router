import React from 'react'
import {Route,Link} from 'react-router-dom'
const Contacts = ({match})=><p>{match.params.id}</p>
class Contact extends React.Component{
    render(){
        return(
           
            <div>
                <h1>Welcome to Contact Page</h1>
                <ul>
                <li><Link to='/contact/1'>Contact 1</Link></li>
                <li><Link to='/contact/2'>Contact 2</Link></li>
                <li><Link to='/contact/3'>Contact 3</Link></li>
                <li><Link to='/contact/4'>Contact 4</Link></li>
                <Route path='/contact/:id' component={Contacts}/>
            </ul>
            </div>
            
        )
    }
}

export default Contact