import React, { Component } from 'react';
import MenusLeft from '../components/MenuLeft/MenusLeft';
import MobileItem from './Mobile/MobileItem';

class MobilePage extends Component {
    
    render() {
        
        return (
            <div>                
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Trang chủ</h3>
                    </div>
                </div>
            
                <div className="panel-body">
                
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <MenusLeft/>
                    </div>

                    
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    <MobileItem/>
                    
                </div>
            </div>  
        );
    }
}            

export default MobilePage;