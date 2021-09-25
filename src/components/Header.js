import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


import styled from "styled-components";

const sectionTit = [
    {
        id : 1,
        section_tit: "이 상품 어때요?"
    },
    {
        id : 2,
        section_tit: "특가/혜택"
    },
    {
        id : 3,
        section_tit: "놓치면 후회할 가격"
    },
    {
        id : 4,
        section_tit: "MD의 추천"
    },
    {
        id : 5,
        section_tit: "지금 가장 핫한 상품",
    },
    {
        id : 6,
        section_tit: "지금 가장 핫한 상품",
    },
    {
        id : 7,
        section_tit: "무거워진 몸, 다시 가볍게!",
    },
    {
        id : 8,
        section_tit: "365일 최저가 도전",
    },
    {
        id : 9,
        section_tit: "식단관리",
    },
    {
        id : 10,
        section_tit: "컬리의 레시피",
    },
    {
        id : 11,
        section_tit: "인스타그램 고객 후기"
    }
  ];


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

                    <ul class = "user_menu">
                        <li className="user_join_item">
                            <Link to = "/Join">회원가입</Link>
                        </li>
                        <span className = "bar"></span>
                        <li className="user_login_item">
                            <Link to = "/Login">로그인</Link>
                        </li>
                        <span className = "bar"></span>
                        <li className="service_center_item">
                            <Link to = "/ServiceCenter">고객센터</Link>
                            <button type="button" className="service_center_icon"></button>
                            <ul className="service_center_detail">
                                <li><Link to  ="#">공지사항</Link></li>
                                <li><Link to ="#">자주하는 질문</Link></li>
                                <li><Link to ="#">1:1 문의</Link></li>
                                <li><Link to ="#">대량주문 문의</Link></li>
                                <li><Link to ="#">상품제안</Link></li>
                                <li><Link to ="#">에코포장 피드백</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>{/*<!--usermenu-->*/}

                <div id="logo">
                    <Link to = "/">
                        <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="마켓컬리 로고"></img>
                    </Link>
                </div>

                <div id="gnb">
                    <ul className="gnb_menu">
                        <li className="all_category">
                            <span className = "icon"><img src = "https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png"></img></span>
                            <span className= "name">전체 카테고리</span>
                            <ul className="all_category_items">
                                <li></li>
                            </ul>
                        </li>
                        <li className="category"><Link to = "/NewProduct">신상품</Link></li>
                        <li className="category"><Link to = "/Best">베스트</Link></li>
                        <li className="category"><Link to = "/Smart">알뜰쇼핑</Link></li>
                        <li className="category"><Link to = "/Sale">특가/혜택</Link></li>
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
                {/*<!--gnb-->*/}

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