import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import contactUsImg from '../assets/images/young-family-with-their-sons-home-having-fun2.jpg'


const Contact = () => {

   return(

      <section className="sectionColor mvh-100" style={{ padding:'0', paddingTop:'8rem'}}>

            <div className="d-flex align-items-center gap-5 mx-auto" style={{width:'90%'}}>

               <Container className="radius-50  p-0" style={{ width:'50%' }}>

                  <h1 className="text-uppercase mb-5">Contact Our Experts</h1>

                  <Form className="d-flex flex-wrap justify-content-center">

                     <Form.Group className="d-flex gap-5 w-100">
                        <Form.Control type="text" placeholder="First Name" className="placeholder-grey mb-3 border-0 rounded-0 px-3 py-2" /> {/* Input field for first name */}
                        <Form.Control type="text" placeholder="Last Name" className="placeholder-grey mb-3 border-0 rounded-0 px-3 py-2" /> {/* Input field for last name */}
                     </Form.Group>
                  
                     <Form.Group className="d-flex gap-5 w-100">
                        <Form.Control type="email" placeholder="Email" className="placeholder-grey mb-3 border-0 rounded-0 px-3 py-2" /> {/* Input field for email */}
                        <Form.Control type="text" placeholder="Phone Number" className="placeholder-grey mb-3 border-0 rounded-0 px-3 py-2" /> {/* Input field for phone number */}
                     </Form.Group>

                     <Form.Group className="d-flex gap-5 w-100">
                        <Form.Control type="text" placeholder="Occupation" className="placeholder-grey mb-3 border-0 rounded-0 px-3 py-2" /> {/* Input field for occupation */}
                        <Form.Control type="text" placeholder="State" className="placeholder-grey mb-3 border-0 rounded-0 px-3 py-2" /> {/* Input field for state */}
                     </Form.Group>

                     <Form.Control as="textarea" rows={4} style={{ resize: 'none' }}placeholder="Message" className="placeholder-grey mb-3 border-0 rounded-0 px-3 py-2" /> {/* Textarea for message */}

                     <Button variant="" className="bg-darkblue text-white fw-bold mt-3" id="blueBtn" type="submit">
                        Submit
                     </Button>

                  </Form>
               </Container>

               <div className='rounded-circle overflow-hidden' style={{ width:'40%' }}>
                  <img src={contactUsImg} alt="Family of Three" className="img-fluid"/>
               </div>

            </div>

         </section>

   )
}

export default Contact;