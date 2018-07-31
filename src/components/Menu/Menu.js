import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (

            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Brand</a>
                </div>
                
                <ul className="nav navbar-nav">
                    <li >
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/mobile">Điện thoại</Link>              
                    </li>
                    <li>                    
                        <Link to="/tablet">Máy tính bảng</Link>
                    </li>
                    
                    <li>                    
                        <a  className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-headphones"></span> Phụ kiện<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><Link to="/tainghe">Tai nghe</Link></li>
                            <li><Link to="/loa">Loa di động</Link></li>
                            <li><Link to="/pin">Pin dự phòng</Link></li>
                        </ul>
                    </li>
                    <li>                    
                        <Link to="/lienhe">Liên hệ</Link>
                    </li>
                    <li>                    
                        <Link to="/giohang"><span className= "glyphicon glyphicon-shopping-cart"></span> Giỏ hàng</Link>
                    </li>

                </ul>
                
            </nav>
            
        );
            
    }
}
  
  export default Menu;