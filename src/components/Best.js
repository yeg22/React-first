import React, {Component}  from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ProductList from './ProductList';

const products = [
    {
        'id' : 1,
        'image' : '#',
        'name' : '[아티제] 에쉬레 롤케이크1',
        'dc' : '10%',
        'price' : '18,900원',
        'origin_price' : '21,000원',
        'des' : '에쉬레 버터의 풍미 그대로'
    },
    {
        'id' : 2,
        'image' : '#',
        'name' : '[프로마제 다피누아] 쁘띠 더블 크림치즈',
        'dc' : '',
        'price' : '10,900원',
        'origin_price' : '',
        'des' : '고소한 맛과 부드러운 질감'
    },
    {
        'id' : 3,
        'img' : '#',
        'name' : '[아티제] 에쉬레 롤케이크3',
        'dc' : '10%',
        'price' : '18,900원',
        'origin_price' : '21,000원',
        'des' : 'dfd'
        
    },
    {
        'id' : 4,
        'img' : '#',
        'name' : '[아티제] 에쉬레 롤케이크4',
        'dc' : '10%',
        'price' : '18,900원',
        'origin_price' : '21,000원',
        'des' : 'dfd'
        
    }

]


function Best(){


    return(
        
        <div className = "content">

            <div className =  "tit_article">
                <a href = "#">
                    <h2>베스트</h2>
                </a>
            </div>{/*<!--tit_article-->*/}

            <div className = "page_article">
                <div className = "sort_menu">
                    <span className = "count_product">총 {products.length}건</span>
                    <ul className = "sort_select">
                        <li><a href = "#">추천순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">신상품순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">인기상품순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">혜택순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">낮은 가격순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">높은 가격순</a></li>
                    </ul>
                </div>{/*<!--sort_menu-->*/}
                <div className = "list_product_wrap">
                    <ul className = "list_product">
            
                        {
                            products.map(c => {
                                return(
                                    <ProductList
                                        key = {c.id}
                                        id = {c.id}
                                        img = {c.img}
                                        name = {c.name}
                                        dc = {c.dc}
                                        price = {c.price}
                                        origin_price = {c.origin_price}
                                    />
                                );
                            })
                        }
                    </ul>
                </div>{/*<!--list_product_wrap-->*/}
            </div>{/*<!--page_article-->*/}

            <div className = "page_pagination">
                <ul className = "page_pagnination_wrap">
                    <li className = "first"><a href = "#"></a></li>
                    <li className = "arrow_left"><a href = "#"></a></li>
                    <li className = "num"><a href = "#">1</a></li>
                    <li className = "num"><a href = "#">2</a></li>
                    <li className = "num"><a href = "#">3</a></li>
                    <li className = "num"><a href = "#">4</a></li>
                    <li className = "num"><a href = "#">5</a></li>
                    <li className = "arrow_right"><a href = "#"></a></li>
                    <li className = "last"><a href = "#"></a></li>
                </ul>
            </div>

        </div> 


    );
}

export default Best;