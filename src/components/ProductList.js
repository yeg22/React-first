import React, {Component}  from 'react';



class ProductList extends React.Component{
    render(){
        return(
        
                        <li>
                            <div className = "thumb">
                                <a href = "#">
                                </a>
                                <div className = "add_cart">
                                    <button className = "btn_add_cart"></button>
                                </div>
                            </div>
                            <a href="#">
                                <div className = "list_product_info">
                                    <h3>{this.props.name}</h3>
                                    <div className = "product_cost">
                                        <span className = "product_price">
                                            <span className = "product_dc">{this.props.dc}</span>
                                            {this.props.price}
                                        </span>
                                        <span className = "product_origin_price">
                                        {this.props.origin_price}
                                        </span>
                                    </div>  
                                    <span className = "product_des">
                                        {this.props.desc}
                                    </span>
                                </div>
                            </a>
                        </li>                       
                    
        );
    }
}

export default ProductList; 