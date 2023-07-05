import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">홈</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <Link to="/board">게시판</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <Link to="https://onethejay.tistory.com/193">내 도움 사이트</Link>
      <hr/>
    </header>
  );
};

export default Header;