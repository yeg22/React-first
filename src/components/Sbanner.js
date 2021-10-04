import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import styled from "styled-components";

function Sbanner(){



    return(
            <section class="quick-menu">
                <div class="quick-notice-image">
                <Link to ="#" className = "imagelink">
                    <img src="https://res.kurly.com/pc/service/main/1904/bnr_quick_20190403.png" alt="" />
                </Link>
                </div>

                <ul class="quick-items">
                <li>
                    <Link to = "#" className = "quicklink">등급별 혜택</Link>
                </li>
                <li>
                    <Link to ="#" className = "quicklink">레시피</Link>
                </li>
                <li>
                    <Link to ="#" className = "quicklink">베스트 후기</Link>
                </li>
                </ul>
            </section>
    );
}

export default Sbanner;