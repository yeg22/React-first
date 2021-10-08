import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import styled from 'styled-components';



//이메일 validation 정규식
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );


//formValid라는 함수 생성 : 객체가 채워졌는지 여부 확인
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // 비어있는 양식 오류의 유효성을 검사
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
    // 양식이 채워졌는지 확인
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
    return valid;
  };



class SignUp extends React.Component {

    //생성자
    constructor(props) {
      super(props);
      this.state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }
      };
    }

    //사용자가 제출 버튼 클릭할 때 정보를 보내는 함수
    handleSubmit = e => {

      e.preventDefault(); //방지 기본값

      if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    };


    //데이터 유효서 검사를 시작할 값이 변경되면, switch사용해 유효하지 않는 경우 처리
    handleChange = e => {
      e.preventDefault();
      
      const { name, value } = e.target;
      let formErrors = this.state.formErrors;

      switch (name) {
        case "firstName":
          formErrors.firstName =
            value.length < 3 ? "6자 " : "";
          break;
        case "lastName":
          formErrors.lastName =
            value.length < 6 ? "minimum 6 characaters required" : "ok";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
          break;
        case "password":
          formErrors.password =
            value.length < 6 ? "minimum 6 characaters required" : "";
          break;
        default:
          break;
      }
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };


    render() {

      const { formErrors } = this.state;

      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>회원가입</h1>
            <span class = "plus"><span class = "essential">*</span>필수입력사항</span>
            <form className = "signform" onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <Label_1 htmlFor="firstName">아이디<span class = "essential">*</span></Label_1>
                <input
                  className="sign_input"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
                <button className = "double_check">중복확인</button>
              </div>

              <div className="firstName">
                <Label_1 htmlFor="firstName">아이디<span class = "essential">*</span></Label_1>
                <input
                  className="sign_input"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="firstName">
                <Label_1 htmlFor="firstName">비밀번호<span class = "essential">*</span></Label_1>
                <input
                  className="sign_input"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="firstName">
                <Label_1 htmlFor="firstName">비밀번호확인<span class = "essential">*</span></Label_1>
                <input
                  className="sign_input"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="firstName">
                <Label_1 htmlFor="firstName">이름<span class = "essential">*</span></Label_1>
                <input
                  className="sign_input"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  

export default SignUp;


const Label_1 = styled.label`
  display:inline-block;
    font-size: 14px;
  color: #333333;
  padding: 29px 0 0 20px;
  width: 159px;
  height: 64px;
`;