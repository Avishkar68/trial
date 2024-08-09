import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';

const SearchScreen = ({ searchTerm, googleData }) => {
  const navigate = useNavigate()
  console.log(googleData);

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
          <div className='col-md-12'>
            <h1>Search Screen : {searchTerm}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchScreen;