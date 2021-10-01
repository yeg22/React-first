//import { render } from '@testing-library/react';
import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Slide from './Slide';

import Section from './Section';
import ProductList from './ProductList';

import MainProduct from "./MainProduct"

import Dummy from "./main.json" //임의로 main.json파일에 데이터 저장 (section_tit)

const obj = {
    0: <Section />,
    1: <Section />,
    2: <Section />
  };

class Main extends React.Component {

    //MD의 추천 
    state = {
        activeId: 0,
      };

      clickHandler = (id) => {
        this.setState({ activeId: id });
      };

      render(){
    return(

        <div id="main">

            <section className = "slide">
                <Slide></Slide>
                <div className="slide-button">
                    <button type="button" className="prev-button"></button>
                    <button type="button" className="next-button"></button>
              </div>
            </section>
            {/*<!--slide-->*/}

            <section className = "recommendation_section">
                <div className = "section_tit">
                    {Dummy.sectionTit[0].section_tit}
                </div>
                <div className = "product_slide">
                    <ul className="main_products">
                        <MainProduct></MainProduct>
                    </ul>
                </div>
                <div className ="slide_button">
                    <a href="#" className = "rec_prev"><img src = "https://res.kurly.com/pc/service/main/1908/btn_prev_default.png?v=1"></img></a>
                    <a href="#" className = "rec_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
        </div>
            </section>{/*<!--recommendation-section-->*/}

            <section className="sale_section">
                <div className = "section_tit2">
                    <a href= "#">
                        {Dummy.sectionTit[1].section_tit}
                        <button type="button" className="title_arrow"></button>
                    </a>
                </div>
                <div className = "sale_wrap">
                    <ul className = "sale_products">
                        <li>
                            <Link to ="#" className = "sale_products_link">
                                <div className = "sale_products_img" />
                                <span className = "sale_products_info_1">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</span>
                                <span className = "sale_products_info_2">신뢰할 수 있는 명품 한우</span>
                            </Link>
                        </li>
                        <li>
                            <Link to ="#" className = "sale_products_link">
                                <div className = "sale_products_img" />
                                <span className = "sale_products_info_1">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</span>
                                <span className = "sale_products_info_2">신뢰할 수 있는 명품 한우</span>
                            </Link>
                        </li>
                        <li>
                            <Link to ="#" className = "sale_products_link">
                                <div className = "sale_products_img" />
                                <span className = "sale_products_info_1">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</span>
                                <span className = "sale_products_info_2">신뢰할 수 있는 명품 한우</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>{/*<!--sale_section-section-->*/}

            <section className="cheap_section">
                <div className = "section_tit2">
                    <a href= "#">
                        {Dummy.sectionTit[2].section_tit}
                        <button type="button" className="title_arrow"></button>
                    </a>
                </div>
                <div className = "product_slide">
                    <ul className="main_products">
                        <li>
                            <a href="#" className = "cheap_products_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "cheap_products_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "cheap_products_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "cheap_products_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="slide_button">
                    <a href="#" className = "cheap_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div>
            </section>{/*<!--cheap_section-->*/}

            <section className="banner_1">
                <img className = "banner_img" src="https://img-cf.kurly.com/shop/data/main/5/pc_img_1631103226.jpg" art=""></img>
            </section>{/*<!--banner_section-->*/}

            <section className="md_recommendation_section">
                <div className = "section_tit">
                {Dummy.sectionTit[3].section_tit}
                </div>
                <div className="category_md_wrap">
                    <div className = "category_md">
                        <ul className = "category_md_list">
                            <li className = "c_md_list" onClick={() => this.clickHandler(0)}>선물하기</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(1)}>채소</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(2)}>과일·견과·쌀</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(3)}>수산·해산·건어물</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(4)}>정육·계란</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(5)}>국·반찬·메인요리</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(6)}>샐러드·간편식</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(7)}>면·양념·오일</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(8)}>생수·음료·우유·커피</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(9)}>간식·과자·떡</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(10)}>베이커리·치즈·델리</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(11)}>건강식품</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(12)}>생활용품·리빙</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(13)}>스킨케어·메이크업</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(14)}>헤어·바디·구강</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(15)}>주방용품</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(16)}>가전제품</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(17)}>베이비·키즈</li>
                            <li className = "c_md_list" onClick={() => this.clickHandler(18)}>반려동물</li>
                        </ul>
                    </div>
                </div>
                <div className = "product_slide">
                    <ul className="main_products">
                        {obj[this.state.activeId]}
                    </ul>
                </div>
                        
                <div className="slide_button">
                    <a href="#" className = "md_rec_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div>
                <div className = "more_link">
                    <a href="#">수산·해산·건어물 전체보기
                        {/*<button type="button" className="btn_more_link"></button>*/}
                    </a>
                </div>
            </section>

            <section className="banner_2">
                <img className = "banner_img" src="https://img-cf.kurly.com/shop/data/main/7/pc_img_1629448784.jpg" art=""></img>
            </section>{/*<!--banner_section-->*/}

            <section className="now_hot_section">
                <div className = "section_tit2">
                    <a href= "#">
                    {Dummy.sectionTit[4].section_tit}
                        <button type="button" className="title_arrow"></button>
                    </a>
                </div>
                <div className = "product_slide">
                    <ul className="main_products">
                        <li>
                            <a href="#" className = "now_hot_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "now_hot_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "now_hot_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "now_hot_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="slide_button">
                    <a href="#" className = "now_hot_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div>
            </section>{/*<!--now_hot_section-->*/}

            <section className="think_section">
                <div className = "section_tit2">
                    <a href= "#">
                    {Dummy.sectionTit[5].section_tit}
                        <button type="button" className="title_arrow"></button>
                    </a>
                </div>
                <div className = "product_slide">
                    <ul className="main_products">
                        <li>
                            <a href="#" className = "think_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "think_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "think_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "think_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="slide_button">
                    <a href="#" className = "think_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div>
            </section>{/*think_section*/}
            
            <section className="last_sale_section">
                <div className = "section_tit2">
                    <a href= "#">
                    {Dummy.sectionTit[6].section_tit}
                        <button type="button" className="title_arrow"></button>
                    </a>
                </div>
                <div className = "product_slide">
                    <ul className="main_products">
                        <li>
                            <a href="#" className = "last_sale_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "last_sale_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "last_sale_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "last_sale_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="slide_button">
                    <a href="#" className = "last_sale_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div>
            </section>{/*<!--last_sale_section-->*/}

            <section className="low_365_section">
                <div className = "section_tit2">
                    <a href= "#">
                    {Dummy.sectionTit[7].section_tit}
                        <button type="button" className="title_arrow"></button>
                        <span className = "tit_sub">최저가 도전, 365일 언제나 알뜰하게</span>
                    </a>
                </div>
                <div className = "product_slide">
                    <ul className="main_products">
                        <li>
                            <a href="#" className = "low_365_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "low_365_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "low_365_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "low_365_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="slide_button">
                    <a href="#" className = "low_365_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div>                
            </section>{/*<!--365_section-->*/}

            <section className="home_section">
                <div className = "section_tit2">
                    <a href= "#">
                    {Dummy.sectionTit[8].section_tit}
                        <button type="button" className="title_arrow"></button>
                        <span className = "tit_sub">마트 상품도 이제 컬리에서</span>
                    </a>
                </div>
                <div className = "product_slide">
                    <ul className="main_products">
                        <li>
                            <a href="#" className = "home_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "home_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "home_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className = "home_img"></a>
                            <h3><a href="#">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">15%</span>
                                        5,780원
                                </div>
                                <span className = "origin_price">
                                    6,800원
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="slide_button">
                    <a href="#" className = "home_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div>
            </section>{/*<!--home_section-->*/}

            <section className="recipe_section">
                <div className = "section_tit2">
                    <a href= "#">
                    {Dummy.sectionTit[9].section_tit}
                        <button type="button" className="title_arrow"></button>
                    </a>
                </div>
                <div className = "recipe_wrap">
                    <ul className = "recipe_products">
                        <li>
                            <a href="#" className = "recipe_img1"></a>
                            <span className = "recipe_products_info">제주식 고사리 육개장</span>
                        </li>
                        <li>
                            <a href="#" className = "recipe_img2"></a>
                            <span className = "recipe_products_info">레이어드 초밥</span>
                        </li>
                        <li>
                            <a href="#" className = "recipe_img3"></a>
                            <span className = "recipe_products_info">그릭 복숭아</span>
                        </li>
                    </ul>
                </div>
                <div className="slide_button">
                    <a href="#" className = "recipe_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div>    
            </section>{/*<!--recipe_section-->*/}

            <section className="insta_section">
                <div className = "section_tit">
                    {Dummy.sectionTit[10].section_tit}
                    {/*<!--<button type="button" class="btn_more_link"></button>-->*/}
                </div>
                <div className = "insta_wrap">
                    <ul className = "insta_products">
                        <li>
                            <a href="#" className = "insta_img"></a>
                        </li>
                        <li>
                            <a href="#" className = "insta_img"></a>
                        </li>
                        <li>
                            <a href="#" className = "insta_img"></a>
                        </li>
                        <li>
                            <a href="#" className = "insta_img"></a>
                        </li>
                        <li>
                            <a href="#" className = "insta_img"></a>
                        </li>
                        <li>
                            <a href="#" className = "insta_img"></a>
                        </li>
                    </ul>
                </div>
                <div className = "insta_more_link">
                    <div className = "insta_more_link_wrap">
                        <span className = "insta_more_a">더 많은 고객 후기가 궁금하다면?</span>
                        <span className = "insta_more_id">@marketkurly_regram</span>
                    </div>
                </div>
                <div className="slide_button">
                    <a href="#" className = "insta_next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
                </div> 
            </section>{/*<!--insta_section-->*/}

            <section className="banner_3">
                <img className = "banner_img" src="https://img-cf.kurly.com/shop/data/main/7/pc_img_1629448784.jpg" art=""></img>
            </section>{/*<!--banner_3-->*/}
        </div>
    );
      }
}

export default Main;