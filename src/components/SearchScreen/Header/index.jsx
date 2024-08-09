import React from 'react'
import SearchHeader from './SearchHeader';
import SearchSubHeader from './SearchSubHeader';

const Header = ({searchTerm}) => {
    return (
        <>
            <SearchHeader searchTerm={searchTerm}/>
            <SearchSubHeader/>
        </>
    )
}

export default Header;