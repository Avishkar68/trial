import React from 'react'
import { Link } from 'react-router-dom'

const Data = ({data}) => {
    console.log("Data " ,data)
  return (
    <div className='col-md-12'>
        <Link to={data.displayLink}>{data.displayLink}</Link>{" "} <i className='fa fa-angle-down'></i>
        <Link to={data.formattedUrl}><h3>{data.title}</h3></Link>
        <p>{data.snippet}</p>
    </div>
  )
}

export default Data