import Rect from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <div class = "page_pagination">
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className="page-item">
                <a onClick = {() => } className = "first-page"/>
                <a onClick = {() => } className = "prev-page"/>
                <a onClick={() => paginate(number)} className="page-link" style={currentPage == number ? {color: '#17a2b8'} : null}>
                  {number}
                </a>
                <a onClick = {() => } className = "next-page"/>
                <a onClick = {() => } className = "last-page"/>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Pagination;