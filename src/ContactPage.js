import React, { Component } from 'react'
import data from './data.json'
import {Link} from 'react-router-dom'
import MaterialIcon, {colorPalette} from 'material-icons-react';



class ContactPage extends Component {

    state = {
        picture: '',
        name: '',
        email: '',
        phone: '',
        city: '',
        state: ''

    }

    getContact = (id) => {
        const p = data.results.find(result => id == result.id)

        this.setState({
            name: p.name,
            lname: p.lname,
            picture: p.picture,
            email: p.email,
            phone: p.phone,
            city: p.location.city,
            states: p.location.state
        })
    }

    componentDidMount(){
        this.getContact(this.props.match.params.id)
    }

    render() {
        return (

            <div> 
                <Link to="/"><MaterialIcon icon="arrow_back" size="large" color={colorPalette.grey._900} /></Link>

                <div className="picbox">
                <p><img className="largepic" src={this.state.picture.large}/></p>
                </div>
            
                <div className="name">
                    <MaterialIcon icon="person" color={colorPalette.grey._900}/>
                    <div className="fname">{this.state.name.first}</div> 
                    <div className="lname">{this.state.name.last}</div>
                    </div>
                    <div className="emailbox">
                        <MaterialIcon icon="email" color={colorPalette.grey._900}/>
                    <div className="email">
                    {this.state.email}
                    </div>
                    </div>
                
                    <div className="phonebox">
                    <MaterialIcon icon="phone_iphone" color={colorPalette.grey._900}/>
                    
                    <div className="phone">
                    {this.state.phone}
                    </div>
                    </div>

                    <div className="citybox">
                    <MaterialIcon icon="location_city" color={colorPalette.grey._900}/>
                    
                    <div className="city">{this.state.city}</div> 
                    <div className="lname">{this.state.states}</div>
                    </div>


                 </div>
            
        )
    }
}

export default ContactPage 