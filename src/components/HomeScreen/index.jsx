import React from 'react'
import Navbar from './Navbar'
import HomeScreen from './HomeScreen'

const Home = ({setSearch , openVoiceSearch}) => {
  return (
    <>
    <Navbar/>
    <HomeScreen openVoiceSearch={openVoiceSearch}  setSearch={setSearch}/>
    </>
  )
}

export default Home