import React from 'react'

const Navbar = () => {
  return (
    <div className='col-md-12 d-flex justify-content-end'>
        <nav className='navbar'>
            <ul className='nav ml-auto'>
                <li className='nav-item'>
                    <a href='/' className='nav-link text-dark'>Gmail</a>
                </li>
                <li className='nav-item'>
                    <a href='/' className='nav-link text-dark'>Images</a>
                </li>
                <li className='nav-item'>
                    <a href='/' className='nav-link text-dark'>
                        <i className='fa fa-th'></i>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='/' className='nav-link text-dark'>
                        <i className='fa fa-user'></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar