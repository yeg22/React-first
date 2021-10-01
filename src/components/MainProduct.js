import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import styled from "styled-components";

import Dummy from "./main.json"

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideBox = styled.div`
        overflow:hidden;
        width: 1050px;
        height: 506px;
        margin: 0 auto;

      .slick-prev:before {
      opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
      color: black; // 버튼 색은 검은색으로
      left: 0;
      }
      .slick-next:before {
      opacity: 1;
      color: black;
      }
        
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


class MainProduct extends React.Component{
    render(){
        const settings = {
            dots: false,
            speed: 100,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            autoplay : true,
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
                {Dummy.mainProducts.map((mainProduct) => ( 
                  

                    <li key={mainProduct.id}>

                      <ImageContainer>
                        <Image src={mainProduct.url} />
                      </ImageContainer>

                      <li> 
                            <h3><Link to ="#">{mainProduct.name}</Link></h3>
                            <div className = "main_product_info">
                                <div className = "price">
                                    <span className = "dc">{mainProduct.dc}</span>
                                    {mainProduct.price}
                                </div>
                                <span className = "origin_price">
                                {mainProduct.origin_price}
                                </span>
                            </div>
                        </li>

                    </li>
                  )

                )}
                <div className ="slide_button">
                    <a href="#" className = ".slick-prev"><img src = "https://res.kurly.com/pc/service/main/1908/btn_prev_default.png?v=1"></img></a>
                    <a href="#" className = ".slick-next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>
              </div>
              </StyledSlider>
              
            </SlideBox>
          );
    }
}

export default MainProduct;