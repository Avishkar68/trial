import React from 'react'
import { Link } from 'react-router-dom';

const SearchSubHeader = () => {
    return (
        <div className='container-fluid px-5'>
            {/* <div className="row"> */}
                <div className="col-md-6 " style={{marginLeft:"5%"}}>
                    <ul className='nav  ml-8'>
                        <li className='nav-item'>
                            <Link to={"/"} className='d-flex nav-link align-items-center justify-content-between  text-dark '>
                            
                            <i className='fa-solid fa-search fa-xs'> All</i>

                             </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/"} className='d-flex nav-link align-items-center justify-content-between text-dark'>
                            <i className="fa-solid fa-location-dot fa-xs">Maps</i>
                             </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/"} className='d-flex nav-link align-items-center justify-content-between text-dark'>
                            <i className='fa-solid fa-play fa-xs'> videos</i>

                             </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/"} className='d-flex nav-link align-items-center justify-content-between text-dark'>
                            <i className='fa-solid fa-image fa-xs '> images</i>

                             </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/"} className='d-flex nav-link align-items-center justify-content-between text-dark'>
                            <i className='fa-solid fa-newspaper fa-xs'> news</i>

                             </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/"} className='d-flex nav-link align-items-center justify-content-between text-dark'>
                            <i className='fa-solid fa-bars fa-xs '> more</i>

                             </Link>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
        </div>
    )
}

export default SearchSubHeader;