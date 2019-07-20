import React, { Component } from 'react';
import {
    Redirect
  } from 'react-router-dom';
class About extends Component {
    componentDidMount(){
 
	}
    render() {
        let {match, location} = this.props;
        let id = match.path;
        console.log(id)
        if (id === "/about") {
            this.props.history.push("/",{location:location});
            //  <Redirect to={
            //                         {
            //                             pathname: '/',
            //                             state: { 
            //                                 from: location 
            //                             }
            //                         }
            //         } 
            //         />;
        }
        console.log(this.props);
        return (
            <div >
               <h3>About</h3>
            </div>
        );
    }
}

export default About;
