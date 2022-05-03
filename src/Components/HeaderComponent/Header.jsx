import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import { Search } from './Search';

const Header = () => {
    return (
        <div>
           <Logo/>
           <Menu/>
           <Search/> 
        </div>
    )
}

export default Header;
