import React, { useState, useEffect } from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ProductList from './ProductList';

import Pagination from './Pagination';
import Post from './Post';
import axios from 'axios';


function Smart(){

        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage] = useState(36);
      
        useEffect(() => {
          const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
          };
      
          fetchPosts();
        }, []);
      
        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
      
        // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        
        <div className = "content">

            <div className = "banner">
                <Link to = "#">
                    <img
                        src="/images/smart_banner.webp"></img>
                </Link>
            </div>
            <div className =  "tit_article">
                    <h2>알뜰쇼핑</h2>
            </div>{/*<!--tit_article-->*/}

            <div className = "page_article">
                <div className = "sort_menu">
                    <span className = "count_product">총 {posts.length}건</span>
                    <ul className = "sort_select">
                        <li><a href = "#">추천순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">신상품순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">인기상품순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">혜택순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">낮은 가격순</a></li>
                        <span className = "bar2">I</span>
                        <li><a href = "#">높은 가격순</a></li>
                    </ul>
                </div>{/*<!--sort_menu-->*/}
                <div className = "list_product_wrap">
                    <Post posts = {currentPosts} loading = {loading}/>
                    <Pagination 
                        postsPerPage ={postsPerPage} 
                        totalPosts={posts.length} 
                        paginate = {paginate}>
                    </Pagination>
                </div>{/*<!--list_product_wrap-->*/}
            </div>{/*<!--page_article-->*/}

            

        </div> 


    );
}


export default Smart;