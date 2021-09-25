import React, {Component}  from 'react';

import styled from 'styled-components';

class Join extends React.Component{
    render(){

    
    return(

        <Join title="회원가입">
            <InputWithLabel 
                    label="아이디" 
                    name="userid" 
                    placeholder="아이디" 
                    value={userid} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="비밀번호" 
                    name="password" 
                    placeholder="비밀번호"
                    type="password" 
                    value={password} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="비밀번호 확인" 
                    name="passwordConfirm" 
                    placeholder="비밀번호 확인" 
                    type="password" 
                    value={passwordConfirm}
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="이름" 
                    name="username" 
                    placeholder="이름" 
                    value={username} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="이메일"
                    name="email"
                    placeholder="이메일" 
                    value={email} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="휴대폰" 
                    name="phone" 
                    placeholder="휴대폰" 
                    value={phone} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="주소" 
                    name="address" 
                    placeholder="이름" 
                    value={address} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="성별" 
                    name="username" 
                    placeholder="이름" 
                    value={username} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="생년월일" 
                    name="username" 
                    placeholder="이름" 
                    value={username} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="추가입력 사항" 
                    name="username" 
                    placeholder="이름" 
                    value={username} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="추가입력 사항" 
                    name="username" 
                    placeholder="이름" 
                    value={username} 
                    onChange={handleChange}
                />
                <AuthButton>회원가입</AuthButton>
            </Join>
    );

    }
}
export default Join;