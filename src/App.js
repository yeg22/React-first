import React, {Component} from 'react';
import './App.css';
import './Login.css';
import './SubPage.css'

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NewProduct from "./components/NewProduct";
import Best from "./components/Best";
import Smart from "./components/Smart";
import Sale from "./components/Sale";
import Slide from "react-slick";
import MainProduct from "./components/MainProduct";



import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

function App(){

  return (
    <div className = "Apple">
      <div className = "container">
        <Header></Header>
        <Route exact path = "/"><Main></Main></Route>
        <Route exact path = "/Header"><Login></Login></Route>
        <Route exact path = "/NewProduct"><NewProduct></NewProduct></Route>
        <Route exact path = "/Best"><Best></Best></Route>
        <Route exact path = "/Smart"><Smart></Smart></Route>
        <Route exact path = "/Sale"><Sale></Sale></Route>
        <Route exact path = "/Login"><Login></Login></Route>
        <Footer></Footer>
      </div>
    </div>
  );
}


export default App;