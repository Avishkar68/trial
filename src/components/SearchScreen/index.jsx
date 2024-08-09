import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchScreen = ({searchTerm , googleData}) => {
  const navigate = useNavigate()
  console.log(googleData);
  
  useEffect(()=>{
    if(searchTerm === ""){
      navigate("/")
    }
  },[searchTerm])
  return (
    <>
        <div>Search Screen : {searchTerm}</div>
    </>
  )
}

export default SearchScreen