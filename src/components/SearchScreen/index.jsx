import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import SearchData from './searchData/index';

const SearchScreen = ({ searchTerm, googleData }) => {
  const navigate = useNavigate()
  console.log("Search screen ",googleData);

  useEffect(() => {
    if (searchTerm === "") {
      navigate("/")
    }
  }, [searchTerm])
  return (
    <>
    <Header searchTerm={searchTerm}/>
      <div className='container'>
        <div className='row'>
          <SearchData googleData={googleData} />
        </div>
      </div>
    </>
  )
}

export default SearchScreen;