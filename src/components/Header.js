import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Navbar from "./Navbar";

import styled from "styled-components";



//  const User_menu = styled.ul`
//     display: flex;
//     height: 37px;

//  `;

function Header(){
    return (
        <div id = "header">
            <div id="header-wrap">

                <div className="usermenu">

                    <div className="delivery_icon">
                        <a href = "#">
                            <img src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" alt="샛별, 택배 배송안내"></img>
                        </a>
                    </div>

                    <ul className = "user_menu">
                        <li className="user_join_item">
                            <Link to = "/SignUp" className = "joinlink">회원가입</Link>
                        </li>
                        {/*<span className = "bar"></span>*/}
                        <li className="user_login_item">
                            <Link to = "/Login" className = "loginlink">로그인</Link>
                        </li>
                        {/*<span className = "bar"></span>*/}
                        <li className="service_center_item">
                            <Link to = "/ServiceCenter" className = "sclink">고객센터</Link>
                            <button type="button" className="service_center_icon"></button>
                            
                            <ul className="service_center_detail">
                                <li><Link to  ="#" className = "scd">공지사항</Link></li>
                                <li><Link to ="#" className = "scd">자주하는 질문</Link></li>
                                <li><Link to ="#" className = "scd">1:1 문의</Link></li>
                                <li><Link to ="#" className = "scd">대량주문 문의</Link></li>
                                <li><Link to ="#" className = "scd">상품제안</Link></li>
                                <li><Link to ="#" className = "scd">에코포장 피드백</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>{/*<!--usermenu-->*/}

                <div id="logo">
                    <Link to = "/">
                        <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="마켓컬리 로고"></img>
                    </Link>
                </div>

                <Navbar></Navbar>

                <div className = "gnb_sub">
                    <ul className = "gnb_sub_1">
                        <li className = "menu1">
                            <span className = "">
                                <img className = "" alt = ""></img>
                                <span className = "tit_sub_1"></span>
                            </span>
                            <ul className = "gnb_sub2">
                                <li><Link to = "#"></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
  }
  
  
  export default Header;