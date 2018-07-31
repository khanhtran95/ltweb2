import React, { Component } from 'react';

class MenusLeft extends Component {
    render() {
        return (
           
           <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh mục</h3>
                </div>
                <div className="panel-body">                       
                    <div className="row">
                        <a>Apple</a>
                    </div> 
                    <div className="row">
                        <a>Samsung</a>
                    </div>
                    <div className="row">
                        <a>HTC</a>
                    </div>                      
                </div>
           </div>
           
            
        );
    }
}

export default MenusLeft;