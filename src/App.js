import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom' 
import './contacts.css'
import ContactPage from './ContactPage'
import Nav from './Nav'




class App extends Component {
  render() {
    return (
      <Router>
      <div>
    <Route exact path="/" component={Nav} />
    <Route path="/contacts/:id" component={ContactPage} />
     </div>
      
      </Router>
    )
}
}
export default App;
