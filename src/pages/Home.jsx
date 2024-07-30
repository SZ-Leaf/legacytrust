import React from "react";
import countrySideImg from '../assets/images/medium-shot-family-living-countryside.jpg'
// import './styles.scss'
import officeLady from '../assets/images/office lady.png'
import { Button, Card, Container, Form } from "react-bootstrap";
import newsImg1 from '../assets/images/newsimg1.jpg'
import newsImg2 from '../assets/images/newsimg2.jpg'
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const Home = () => {



   return(
      <div className="w-100 p-0 sectionColor mt-5">

         <section className="d-flex align-items-center justify-content-between cstm-w-90 py-5 mt-2"> 

            <div className="col-5 fw-bold">
               <h1 className="title-fs fw-bold">At the heart of our mission is safeguarding families across the nation</h1>

               <p className="mt-4">Our experts will help you establish financial strength and stability. We will be your reliable partner in securing your financial well-being.</p>

               <div className="d-flex mt-4 gap-5 align-items-center">
                  <Button className="fw-bold bg-darkblue blueBtn" id="requestAgentBtn">Request Agent</Button>
                  <Link to="/services" className="fw-medium text-decoration-none text-dark">Our Services →</Link>
               </div>

            </div>

            <div className="col-4 countryside-img-div">

               <img className="countrysideImg img-fluid countryside-img" alt="Countryside"  src={countrySideImg}/>

            </div>

         </section>

         <section className="d-flex flex-wrap align-items-center justify-content-between cstm-w-90 mt-7rem vh-100 py-5">

            <div className="aboutUs-div1 d-flex flex-wrap align-items-center col-6 pt-5">

               <p className="text-uppercase aboutUSRotate">About Us</p>

               <div className="" style={{width:'70%'}}>
                  <h2 className="fs-2 fw-bold">Your families are our families, and our duty is to always protect them.<br></br>ijue ksjia</h2>
                  <p className="pt-2">When you choose Legacy Trust for your life insurance, savings and/or retirement needs, they receive over 30 years of financial strength, stability, and a Legacy you can Trust in.</p>
               </div>
            
               <div className="learnMorediv">
                  <Button className="fw-bold blueBtn bg-darkblue" id="">Learn More</Button>
               </div>

            </div>

            <div className="col-5 officeLady-img h-100 text-center">

               <img className="img-fluid h-100" alt="Office Lady"  src={officeLady}/>

            </div>

         </section>

         <section className="cstm-w-90 mt-7rem">

            <div className="mx-auto w-50 text-center">
               <h2 className="text-uppercase fs-1 fw-normal">Our Services</h2>
               <p className="fw-bold fs-1">We Protect your Legacy.</p>
            </div>

            <Cards />

         </section>

         <section className="cstm-w-90 mt-7rem pt-5">

            <div className="d-flex">

               <div className="pt-5"  style={{ width:'40%' }}>
                  <h1 className="fw-normal m-0" style={{fontSize:'3rem'}}>News</h1>
                  <p className="fw-bold fs-1">Recent News & Press</p>
               </div>

               <div className="d-flex justify-content-between" style={{ width:'60%' }}>

                  <Card
                     style={{ width:'49.5%' }}
                     className="bg-transparent border-0 text-center"
                  >
                     <Card.Img className="cardImg" variant="top" src={newsImg1} />
                     <Card.Body>
                        <Card.Title className="fs-2">Lorem Ipsum</Card.Title>
                        <Card.Link className="fw-bold text-decoration-none"
                        style={{color:'#002768'}} href="#">Read More</Card.Link>
                     </Card.Body>
                  </Card>

                  <Card
                     style={{ width:'49.5%' }}
                     className="bg-transparent border-0 d-flex text-center"
                  >
                     <Card.Img className="cardImg cardImg2 align-self-center" variant="top" src={newsImg2} />
                     <Card.Body>
                        <Card.Title className="fs-2">Lorem Ipsum</Card.Title>
                        <Card.Link className="fw-bold text-decoration-none"
                        style={{color:'#002768'}} href="#">Read More</Card.Link>
                     </Card.Body>
                  </Card>

               </div>

            </div>

         </section>

         <section className="w-100 mt-5 bg-white pt-5">

            <div className="w-75 m-auto text-center">

               <h3 className="text-uppercase fs-1 fw-normal">Our Partners</h3>

               <div className="d-flex flex-wrap gap-3 py-5">

                  <div className="d-flex w-100 justify-content-between">
                     <div className="partnerDiv"></div>
                     <div className="partnerDiv"></div>
                     <div className="partnerDiv"></div>
                  </div>

                  <div className="d-flex w-100 justify-content-between">
                     <div className="partnerDiv"></div>
                     <div className="partnerDiv"></div>
                     <div className="partnerDiv"></div>
                  </div>

               </div>

            </div>

         </section>

      </div>
   )
}

export default Home;