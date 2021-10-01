import React, {Component}  from 'react';

//import styled from 'styled-components';

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className = "list_product">
      {posts.map(post => (
        
      <li key={post.id}>
        <div className = "thumb">
            <a href = "#">
            </a>
            <div className = "add_cart">
                <button className = "btn_add_cart"></button>
            </div>
        </div>
        <a href="#">
            <div className = "list_product_info">
                <h3>{post.id}[아티제] 에쉬레 롤케이크1</h3>
                <div className = "product_cost">
                    <span className = "product_price">
                        <span className = "product_dc">{post.id}%</span>
                        {post.id}원
                    </span>
                    <span className = "product_origin_price">
                    {post.id}원
                    </span>
                </div>  
                <span className = "product_des">
                    {post.id}에쉬레 버터의 풍미 그대로
                </span>
            </div>
        </a>
        </li>
      ))}
    </ul>


  );
};

export default Post;