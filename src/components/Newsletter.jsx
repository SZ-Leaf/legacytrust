import React from "react";
import Logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


const Newsletter = () => {



   return(

      <section className="d-flex flex-wrap justify-content-center mx-auto w-100 sectionColor pt-5">

         <div className="pt-5" style={{width:'60%'}}>
          
            <Link to='/' className='text-center mx-auto' style={{ width: '50%', display:'block' }}>
               <img className='w-100' src={Logo} alt="logo" />
            </Link>
            
            <p className="w-100 fw-semi-bold fs-4 mt-5">Sign Up for Email Updates<br></br>
            Stay up-to-date with all the exciting news and events with Legacy Trust Finacial.</p>
            
            <Form className="w-100 d-flex mt-5 mb-5 justify-content-between">
               <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-0"
                  required
                  style={{ width:'70%' }}
               />
               <Button
                  style={{width:'25%'}} variant="primary" type="submit" className="bg-darkblue submitBtn fw-bold fs-5" id="blueBtn">
                  Submit
               </Button>
            </Form>
         </div>

      </section>

   )
}

export default Newsletter;