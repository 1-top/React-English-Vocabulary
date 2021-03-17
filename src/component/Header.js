import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to='/'><h1>English word</h1></Link>
            <div>
                <a href="#x">단어 추가</a>
                <a href="#x">Day 추가</a>
            </div>
        </div>
    );
};

export default Header;
