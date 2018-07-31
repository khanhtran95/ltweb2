import React, { Component } from 'react';

class MobileItem extends Component {
    render() {
        return (
                        
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                
                <a  className="thumbnail">
                <img  />
                <h4>Tên sản phẩm</h4>
                <h5>Giá:  đ</h5>
                
                {/* <span className={`label label-${statusClass}`}>
                {trangThai}
                </span> */}
                <br/>
                
                    
                                                                    
                <button type="button" className="btn btn-success">Mua hàng</button>
                <button type="button" className="btn btn-danger">Thêm vào giỏ</button>
                </a>
            
            </div>
        );
    }
}

export default MobileItem;