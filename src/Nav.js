import React, { Component } from 'react'
import data from './data.json'
import {Link} from 'react-router-dom'
import Contact from './Contact'

class Nav extends Component {
   render() {
       return (
        
        <nav>
          <ul className="mainul">
           <li className="peeps">My Peeps</li>
        {data.results.map(result => (
            <li className="contactLink" key={result.id}> 
        <Link to={"/contacts/" + result.id} style={{ textDecoration: 'none' , color: 'black'}}>
          <Contact 
          name= {result.name.first + ' ' + result.name.last}
          thumbnail={result.picture.thumbnail} 
          email={result.email}
          picture={result.picture.large}
          city={result.location.city}
          state={result.location.state}
          phone={result.phone}
                    
                    />
                    </Link>
                    </li>
        ))}
        </ul>
      </nav>
       )
   }

}

export default Nav