import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

function Footer(){
    return (
        <div id="footer">
            <div className = "footer_wrap">
                <div className = "footer_up">
                    <div className = "f_service_center">
                        <div className = "f_sc_tit">
                            <h3>고객행복센터</h3>
                        </div>
                        <div className = "f_sc_call">
                            <div className = "sc_call_num">1644-1107</div>
                            <div className = "sc_call_about">
                                <div className =  "sc_call_about_1">365고객센터</div>
                                <div className =  "sc_call_about_2">오전 7시 - 오후 7시</div>
                            </div>
                        </div>
                        <div className = "f_sc_kakao">
                            <a href="#" className = "sc_call_tit">카카오톡 문의</a>
                            <div className = "sc_call_about">
                                <div className =  "sc_call_about_1">365고객센터</div>
                                <div className =  "sc_call_about_2">오전 7시 - 오후 7시</div>
                            </div>
                        </div>
                        <div className = "f_sc_qna">
                            <a href="#" className = "sc_call_tit">1:1 문의</a>
                            <div className = "sc_call_about">
                                <div className =  "sc_call_about_1">24시간 접수 가능</div>
                                <div className =  "sc_call_about_2">고객센터 운영시간에 순차적으로 답변해드리겠습니다.</div>
                            </div>
                        </div>
                        <div className = "f_sc_b_qna">
                            <a href="#" className = "sc_call_tit">대량주문 문의</a>
                            <div className = "sc_call_about_2">비회원의 경우 메일로 문의 바랍니다.</div>
                        </div>
                    </div>
                    <div className = "f_company">
                        <ul className = "f_c_menu">
                            <li><a href = "#">컬리소개</a></li>
                            <li><a href = "#">컬리소개영상</a></li>
                            <li><a href = "#">인재채용</a></li>
                            <li><a href = "#">이용약관</a></li>
                            <li><a href = "#">개인정보처리방침</a></li>
                            <li><a href = "#">이용안내</a></li>
                        </ul>
                        <ul className = "f_c_about">
                            <li>
                                법인명 (상호) : 주식회사 컬리
                                <span className = "bar">I</span>
                                사업자등록번호 : 261-81-23567 
                                <a href = "#">사업자정보확인</a>                            
                            </li>
                            <li>
                                통신판매업 : 제 2018-서울강남-01646호 
                                <span className = "bar">I</span>
                                개인정보보호책임자 : 이원준
                            </li>
                            <li>
                                주소 : 서울특별시 강남구 테헤란로 133,18층(역삼동)
                                <span className = "bar">I</span>
                                대표이사 : 김슬아
                            </li>
                            <li>
                                입점문의 : <a href = "#">입점문의하기</a>
                                <span className = "bar">I</span>
                                제휴문의 : <a href = "#">business@kurlycorp.com</a>
                            </li>
                            <li>
                                채용문의 : <a href = "#">recruit@kurlycorp.com</a>
                            </li>
                            <li>
                                팩스 : 070 - 7500 - 6098
                                <span className = "bar">I</span>
                                이메일 : <a href = "#">help@kurlycorp.com</a>
                            </li>
                            <li>
                                대량주문 문의 : <a href = "#">kurlygift@kurlycorp.com</a>
                            </li>
                        </ul>
                        <em className = "f_c_copy">
                            &#169; KURLY CORP.ALL RIGHTS RESERVED
                        </em>
                        <ul className = "f_c_sns">
                            <li>
                                <a href="https://instagram.com/marketkurly" target="_blank">
                                    <img src = "https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기"></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/marketkurly" target="_blank">
                                    <img src = "https://res.kurly.com/pc/ico/1810/ico_fb.png" alt = "마켓컬리 페이스북 바로가기"></img>
                                </a>
                            </li>
                            <li>
                                <a href="http://blog.naver.com/marketkurly" target="_blank">
                                    <img src = "https://res.kurly.com/pc/ico/1810/ico_blog.png" alt = "마켓컬리 네이버블로그 바로가기"></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://m.post.naver.com/marketkurly" target="_blank">
                                    <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 포스터 바로가기"></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" target="_blank">
                                    <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "footer_down">
                    <div className = "f_link">
                        <a href = "#" className = "f_link_1">
                            <img className = "f_l_img1" src = "https://res.kurly.com/pc/ico/2001/logo_isms.png" alt = ""></img>
                            <p className = "f_l_p">
                                [인증범위] 마켓컬리 쇼핑몰 서비스 개발 · 운영<br></br>
                                [유효기간] 2019.04.01 ~ 2022.03.31
                            </p>
                        </a>
                        <a href = "#" className = "f_link_2">
                            <img className = "f_l_img2" src = "https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png" alt = ""></img>
                            <p className = "f_l_p">
                                개인정보보호 우수 웹사이트 · <br></br>
                                개인정보처리시스템인증 (ePRIVACY PLUS)
                            </p>
                        </a>
                        <a href = "#" className = "f_link_3">
                            <img className = "f_l_img3" src = "https://res.kurly.com/pc/service/main/2009/logo_payments.png" alt = ""></img>
                            <p className = "f_l_p">
                                고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 <br></br>
                                토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
                            </p>
                        </a>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Footer;