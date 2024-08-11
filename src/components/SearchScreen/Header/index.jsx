import React from 'react'
import SearchHeader from './SearchHeader';
import SearchSubHeader from './SearchSubHeader';

const Header = ({searchTerm , openVoiceSearch, setSearch}) => {
    return (
        <>
            <SearchHeader openVoiceSearch={openVoiceSearch} searchTerm={searchTerm} setSearch={setSearch}/>
            <SearchSubHeader/>  
        </>
    )
}

export default Header;