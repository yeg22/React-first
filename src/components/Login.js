import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

function Login(){
    return (
        
                <div className = "login">
                    <div className = "login_wrap">
                        <div className = "login_form">
                            <h3 className = "tit_login">로그인</h3>
                            <div className = "login_write_form">
                                <input type = "text" placeholder = "아이디를 입력해주세요" />
                                <input type = "password" placeholder = "비밀번호를 입력해주세요" />
                                <div className = "login_check">
                                    <div className = "login_security">
                                        <label><input type = "checkbox"></input></label>
                                    </div>
                                    <div className = "login_search">
                                        <Link to = "#" className= "id_search">아이디 찾기</Link>
                                        <span className = "bar">I</span>
                                        <Link to = "#" className= "password_search">비밀번호 찾기</Link>
                                    </div>
                                </div>
                                <button type = "submit" className ="button_login">로그인</button>
                                <button type = "submit" className ="button_join">회원가입</button>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Login;