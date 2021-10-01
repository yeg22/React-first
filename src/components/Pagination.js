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
                <a onClick={() => paginate(number)} className="page-link">
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Pagination;