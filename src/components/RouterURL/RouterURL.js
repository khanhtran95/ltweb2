import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MobilePage from '../../Pages/MobilePage';
import HomePage from '../../Pages/HomePage';


class RouterURL extends Component {
    render() {
        return (
            
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/mobile" component={MobilePage}/>
                    <Route component={HomePage}/>
                </div>
                    

            
        );
    }
}

export default RouterURL;