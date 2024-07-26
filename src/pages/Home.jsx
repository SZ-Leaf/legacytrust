import React from "react";
import countrySideImg from '../assets/images/medium-shot-family-living-countryside.jpg'
// import './styles.scss'
import officeLady from '../assets/images/office lady.png'
import { Button, Card, Container, Form } from "react-bootstrap";
import newsImg1 from '../assets/images/newsimg1.jpg'
import newsImg2 from '../assets/images/newsimg2.jpg'

const Home = () => {



   return(
      <div className="w-100 p-0">

         <section className="d-flex align-items-center justify-content-between cstm-w-90 py-5 mt-5"> 

            <div className="col-5 fw-bold">
               <h1 className="title-fs fw-bolder">Lorem ipsum</h1>

               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
               diam nonummy nibh euismod tincidunt ut laoreet dolore
               magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
               quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
               aliquip ex ea commodo consequat. Duis autem vel eum iriure
               dolor in hendrerit in vulputate velit esse molestie consequat,
               vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
               et iusto odio dignissim qui blandit praesent</p>

               <div className="d-flex gap-5 align-items-center">
                  <Button className="fw-bold bg-darkblue" id="blueBtn">Request Agent</Button>
                  <a href="" className="fw-medium text-decoration-none text-dark">Our Services →</a>
               </div>

            </div>

            <div className="col-4 countryside-img-div">

               <img className="countrysideImg img-fluid countryside-img" alt="Countryside"  src={countrySideImg}/>

            </div>

         </section>

         <section className="d-flex flex-wrap align-items-center justify-content-between cstm-w-90 mt-7rem vh-100 py-4">

            <div className="aboutUs-div1 d-flex flex-wrap align-items-center col-6">

               <p className="text-uppercase darkblue">About Us</p>

               <div className="w-75">
                  <h2>Lorem ipsum<br></br>ijue ksjia</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.</p>
               </div>
            
               <div className="learnMorediv">
                  <Button className="fw-bold bg-darkblue" id="blueBtn">Learn More</Button>
               </div>

            </div>

            <div className="col-5 officeLady-img h-100 text-center">

               <img className="img-fluid h-100" alt="Office Lady"  src={officeLady}/>

            </div>

         </section>

         <section className="cstm-w-90 mt-7rem">

            <div className="mx-auto w-50 text-center">
               <h2 className="text-uppercase fw-normal">Our Services</h2>
               <p className="fw-bold fs-1">We Protect your Legacy.</p>
            </div>

            <div className="d-flex flex-wrap w-50 mx-auto justify-content-between gap-2 mt-5">
               
               <Card style={{ width: '49%' , borderRadius:'25px'}}
                  className="border-0"
               >
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                     <Card.Title>Final Expense</Card.Title>
                     <Card.Text>
                        Final Expense insurance will cover you for life.
                        Prices are locked and will never
                        increase nor will your policy end. These types
                        of policies are designed to make
                        sure all funeral and other end of life
                        expenses are covered
                     </Card.Text>
                  </Card.Body>
               </Card>

               <Card style={{ width: '49%' , borderRadius:'25px'}}
                  className="border-0"
               >
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                     <Card.Title>Indexed Universal Life</Card.Title>
                     <Card.Text>
                        Final Expense insurance will cover you for life.
                        Prices are locked and will never
                        increase nor will your policy end. These types
                        of policies are designed to make
                        sure all funeral and other end of life
                        expenses are covered
                     </Card.Text>
                  </Card.Body>
               </Card>

               <Card style={{ width: '49%' , borderRadius:'25px'}}
                  className="border-0"
               >
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                     <Card.Title>Mortage Protection</Card.Title>
                     <Card.Text>
                        Final Expense insurance will cover you for life.
                        Prices are locked and will never increase nor will your policy end. These types of policies are designed to make sure all funeral and other end of life expenses are covered.
                     </Card.Text>
                  </Card.Body>
               </Card>

               <Card style={{ width: '49%' , borderRadius:'25px'}}
                  className="border-0"
               >
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                     <Card.Title>Fixed Index Annuities</Card.Title>
                     <Card.Text>
                        Final Expense insurance will cover you for life.
                        Prices are locked and will never
                        increase nor will your policy end. These types
                        of policies are designed to make
                        sure all funeral and other end of life
                        expenses are covered
                     </Card.Text>
                  </Card.Body>
               </Card>

            </div>

         </section>

         <section className="cstm-w-90 mt-7rem pt-5">

            <div className="d-flex">

               <div className="pt-5"  style={{ width:'40%' }}>
                  <h1 className="fw-normal m-0">News</h1>
                  <p className="fw-bold fs-2">Recent News & Press</p>
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

         <section className="w-100 mt-7rem bg-white pt-5">

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

         <section className="cstm-w-90 vh-100 mt-7rem">

            <div className="d-flex">

            <Container className="" style={{ width:'60%' }}>
               <h1 className="text-uppercase">Contact Our Experts</h1>
               <Form>
                  <Form.Control type="text" placeholder="First Name" className="mb-3" /> {/* Input field for first name */}
                  <Form.Control type="text" placeholder="Last Name" className="mb-3" /> {/* Input field for last name */}
                  <Form.Control type="email" placeholder="Email" className="mb-3" /> {/* Input field for email */}
                  <Form.Control type="text" placeholder="Phone Number" className="mb-3" /> {/* Input field for phone number */}
                  <Form.Control type="text" placeholder="Occupation" className="mb-3" /> {/* Input field for occupation */}
                  <Form.Control type="text" placeholder="State" className="mb-3" /> {/* Input field for state */}
                  <Form.Control as="textarea" rows={3} placeholder="Message" className="mb-3" /> {/* Textarea for message */}
                  <Button variant="" className="bg-darkblue" id="blueBtn" type="submit">
                     Submit
                  </Button>
               </Form>
            </Container>

               <div className="" style={{ width:'40%' }}></div>

            </div>

         </section>
      </div>
   )
}

export default Home;