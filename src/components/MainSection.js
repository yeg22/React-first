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

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }

class MainSection extends React.Component{


    render(){
        const settings = {
            dots: true,
            speed: 100,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            autoplay : true,
            pauseOnHover : true,
            draggable : false,
            speed : 700,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };

          return (
            <SlideBox>
              <StyledSlider ref={c => (this.slider = c)} {...settings}
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
                    <button className = "button" onclick = {this.previous}>previous</button>
                    <button className = "button" onclick = {this.next}>next</button>
                    {/*<a href="#" className = ".slick-next"><img src = "https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"></img></a>*/}
                </div>
              </StyledSlider>
              
            </SlideBox>
          );
    }
}

export default MainSection;