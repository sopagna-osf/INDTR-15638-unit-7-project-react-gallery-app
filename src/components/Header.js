import React from 'react';

import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => (
    <div>
        <SearchForm {...props} />
        <Nav />
    </div>
);

export default Header;