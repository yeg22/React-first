import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import styled from "styled-components";

const StyledLink = styled(Link)`
    font-size: 16px;
    height: 100%;
    font-weight: 700;
    text-decoration:none;
    color: #333333;
    font-family: 'Noto Sans';
    letter-spacing: -0.3px;
    line-height: 20px;

    &:focus, &:hover, &:visited, &:link, &:active {
        
    }
    &:hover{
        
        text-decoration:underline;
        color:#5f0080;
    }
    &:focus{
        color:#5f0080;
    }
`;

const Navbar  = () => {

    return (
        <div id="gnb">
                    <ul className="gnb_menu">
                        <li className="all_category">
                            <span className = "icon"><img src = "https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png"></img></span>
                            <span className= "name">전체 카테고리</span>
                            <ul className="all_category_items">
                                <li></li>
                            </ul>
                        </li>
                        <li className="category"><StyledLink to = "/NewProduct" className = "">신상품</StyledLink></li>
                        <li className="category"><StyledLink to = "/Best">베스트</StyledLink></li>
                        <li className="category"><StyledLink to = "/Smart">알뜰쇼핑</StyledLink></li>
                        <li className="category"><StyledLink to = "/Sale">특가/혜택</StyledLink></li>
                    </ul>
                    <div className="gnb_side">
                        <form action="#" className="gnb_side_search">
                            <input type = "text" className = "side_search_bar" placeholder="검색어를 입력해주세요."></input>
                            <input type = "image" className = "btn_side_search" src = "https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"></input>
                        </form>
                        <button type="button" className="gnb_side_location"></button>
                        <button type="button" className="gnb_side_cart"></button>
                    </div>
                </div>
                
    );
};

export default Navbar;