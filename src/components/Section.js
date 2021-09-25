import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import styled from "styled-components";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideBox = styled.div`
        overflow:hidden;
        width: 1050px;
        height: 506px;
        margin: 0 auto;
        
      `;
      
    const StyledSlider = styled(Slider)`
          .slick-slide div{
            outline: none;
          }
      `;
      
      const ImageContainer = styled.div`
      
      height: 320px;
      display: flex;
    justify-content: space-between;
      
      `;

      const ProductInfo = styled.div`
      
      `;

      const Product = styled.div`
      `;

      const Image = styled.img`
      
      `;

      /*const items = [
        { id: 1, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 2, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 3, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 4, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 5, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 6, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 7, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 8, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 9, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        { id: 10, url: 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg' },
        
      ];*/
/*
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
  ];*/

  const items = [
    {
        'id' : 1,
        'url': 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg',
        'name' : '[아티제] 에쉬레 롤케이크1',
        'dc' : '10%',
        'price' : '18,900원',
        'origin_price' : '21,000원',
        'des' : '에쉬레 버터의 풍미 그대로'
    },
    {
        'id' : 2,
        'url': 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg',
        'name' : '[프로마제 다피누아] 쁘띠 더블 크림치즈',
        'dc' : '',
        'price' : '10,900원',
        'origin_price' : '',
        'des' : '고소한 맛과 부드러운 질감'
    },
    {
        'id' : 3,
        'url': 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg',
        'name' : '[아티제] 에쉬레 롤케이크3',
        'dc' : '10%',
        'price' : '18,900원',
        'origin_price' : '21,000원',
        'des' : 'dfd'
        
    },
    {
        'id' : 4,
        'url': 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg',
        'name' : '[아티제] 에쉬레 롤케이크4',
        'dc' : '10%',
        'price' : '18,900원',
        'origin_price' : '21,000원',
        'des' : 'dfd'
        
    },
    {
        'id' : 5,
        'url': 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg',
        'name' : '[프로마제 다피누아] 쁘띠 더블 크림치즈',
        'dc' : '',
        'price' : '10,900원',
        'origin_price' : '',
        'des' : '고소한 맛과 부드러운 질감'
    },
    {
        'id' : 6,
        'url': 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg',
        'name' : '[프로마제 다피누아] 쁘띠 더블 크림치즈',
        'dc' : '',
        'price' : '10,900원',
        'origin_price' : '',
        'des' : '고소한 맛과 부드러운 질감'
    },
    {
        'id' : 7,
        'url': 'https://img-cf.kurly.com/shop/data/goods/big/201511/385_shop1_556007.jpg',
        'name' : '[프로마제 다피누아] 쁘띠 더블 크림치즈',
        'dc' : '',
        'price' : '10,900원',
        'origin_price' : '',
        'des' : '고소한 맛과 부드러운 질감'
    }

]
class Section extends React.Component{
    render(){
        const settings = {
            dots: false,
            speed: 100,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            pauseOnHover : true,
            draggable : false,
            speed : 700
            /*prevArrow : "<button type = 'button' class = ''></button>",
            nextArrow : "<button type = 'button' class = ''></button>"*/
          };

          return (
            <SlideBox>
              <StyledSlider {...settings}
              >
                {items.map(item => {
                  return (

                    <div key={item.id}>

                      <ImageContainer>
                        <Image src={item.url} />
                      </ImageContainer>

                      <li> 
                            <h3><a href="#">{item.name}</a></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">{item.dc}</span>
                                    {item.price}
                                </div>
                                <span className = "origin_price">
                                {item.origin_price}
                                </span>
                            </div>
                        </li>

                    </div>
                  );

                })}
              </StyledSlider>
            </SlideBox>
          );
    }
}

export default Section;