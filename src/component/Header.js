import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to='/'><h1>English word</h1></Link>
            <div>
              <Link to='/create_word'>단어 추가</Link>
              <Link to='/create_day'>Day 추가</Link>
            </div>
        </div>
    );
};

export default Header;
