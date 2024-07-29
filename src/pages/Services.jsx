// src/pages/Services.jsx
import React from 'react';
import servicesBanner from "../assets/images/long-shot-happy-girl-holding-her-hat.jpg";
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import Cards from '../components/Cards';
import Servicetabs from '../components/Servicetabs';

const Services = () => {
  return(
    <div className="w-100 p-0 sectionColor mt-5">

      <div className='w-100 text-center pt-5'>
        <h1 className='' style={{ fontSize:'64px' }}>Our Services</h1>
        <p className='fs-5'>Learn more about the variety of financial solutions we provide to protect your family.</p>
      </div>

      <div className='w-100 bannerdiv mt-5'>
        <div className='bannerContent'>

          <h1 className='fw-bold' style={{color:'#002768'}}>Building a<br></br>Stronger<br></br>Tomorrow Starts<br></br>Today.</h1>

          <p className='mt-4'>If you're starting a family, buying a home,
          planning a trip, or protecting your portfolio
          of properties, our coverage and products can
          help give you a stronger future.</p>

          <Button variant="" className='mt-3 text-white fw-bold bg-darkblue' id='blueBtn'>Learn More</Button>

        </div>
      </div>

      <section className='cstm-w-90 mt-7rem'>
        <Cards className='mt-4'></Cards>
      </section>

      <span className='cstm-w-80 mx-auto lineSpan'></span>

      <div className="cstm-w-80 mx-auto pt-5" style={{marginTop:'5rem'}}>
        <Servicetabs />
      </div>

      

    </div>
  )
}

export default Services;
