import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import styled from "styled-components";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


    const SlideBox = styled.div`
        overflow:hidden;
        width: 100%;
        height: 370px;
      `;
      
    const StyledSlider = styled(Slider)`
          .slick-slide div{
            outline: none;
          }
      `;
      
      const ImageContainer = styled.div`
      width: 100%;
      height: 370px;
      `;

      const Image = styled.img`
      
      `;

      /*const Image = styled.img`
      max-width:100%;
      max-height:100%;
      `;*/
      
      /*
      /*const imgUrl = require('./image/.jpg');*/
      
      const items = [
        { id: 1, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1631785399.jpg' },
        { id: 2, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1631862358.jpg' },
        { id: 3, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1632439279.jpg' },
        { id: 4, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1632441833.jpg' },
        { id: 5, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1631863020.jpg' },
        { id: 6, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1632453207.jpg' },
        { id: 7, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1628583839.jpg' },
        { id: 8, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1621561009.jpg'},
        { id: 9, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1583112495.jpg' },
        { id: 10, url: 'https://img-cf.kurly.com/shop/data/main/1/pc_img_1596164134.jpg' },
      ];
      
      
      class Slide extends React.Component {

        render() {

          const settings = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay : true,
            autoplaySpeed : 2000,
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
                    </div>
                  );
                })}
              </StyledSlider>
              
            </SlideBox>
          );

        }
      }
    

export default Slide;