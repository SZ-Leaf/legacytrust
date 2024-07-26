import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/images/logo.png'

const Navbar = () => {

   const [active, setActive] = useState('');

  return (
    <div className='bg-white w-100 p-0'>
      <nav className='navbar d-flex cstm-w-90'>

        <Link to='/' className='col-2'><img className='w-100' src={Logo} alt="logo" /></Link>
        

        <ul className='navlist d-flex list-unstyled gap-5 list-unstyled main-nav m-0'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Button variant="danger fw-bold">
          Request Agent
        </Button>

      </nav>
    </div>
  );
}

export default Navbar;
