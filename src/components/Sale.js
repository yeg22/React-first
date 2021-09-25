import React, {Component}  from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import SaleList from './SaleList';

const salelists = [
    {
        'id' : 1,
        'img' : 'https://img-cf.kurly.com/shop/data/event/7d6be3ddbaf17e8cf21a35ca96d65644.jpg'
    },
    {
        'id' : 2,
        'img' : 'https://img-cf.kurly.com/shop/data/event/e34869847134e12f6c2657dd4221490b.jpg'
    },
    {
        'id' : 3,
        'img' : 'https://img-cf.kurly.com/shop/data/event/e9570a75c8d4b3267eb31a4c2e0e4f22.jpg'
    },
    {
        'id' : 4,
        'img' : 'https://img-cf.kurly.com/shop/data/event/7eaa19e101c55322702e381f5a5850c4.jpg'
    }
]

function Sale(){
    return(
        <div className = "content">

                <div className = "list_product_wrap">
                    <ul className = "sale_banner">
            
                        {
                            salelists.map(c => {
                                return(
                                    <SaleList
                                        key = {c.id}
                                        id = {c.id}
                                        img = {c.img}
                                    />
                                );
                            })
                        }
                    </ul>
                </div>{/*<!--list_product_wrap-->*/}

        </div> 


    );
}


export default Sale;