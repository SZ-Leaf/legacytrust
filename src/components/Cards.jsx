import Card from "react-bootstrap/Card";
import Img1 from '../assets/images/v.png'
import Img2 from '../assets/images/v1.png'
import Img3 from '../assets/images/v2.png'
import Img4 from '../assets/images/V3.png'

const Cards = () => {


   return(

      <div className="d-flex flex-wrap col-6 mx-auto justify-content-between gap-3 mt-5">
               
               <Card style={{ width: '48%' , borderRadius:'40px'}}
                  className="border-0 py-4"
               >
                  <div className="cardImgDiv"><Card.Img variant="top" className="w-25" src={Img1} /></div>
                  <Card.Body>
                     <Card.Title className="fs-3 text-center">Final Expense</Card.Title>
                     <Card.Text className="mt-4 w-75 mx-auto cardText">
                        Final Expense insurance will cover you for life.
                        Prices are locked and will never
                        increase nor will your policy end. These types
                        of policies are designed to make
                        sure all funeral and other end of life
                        expenses are covered
                     </Card.Text>
                  </Card.Body>
               </Card>

               <Card style={{ width: '48%' , borderRadius:'25px'}}
                  className="border-0 py-4"
               >
                  <div className="cardImgDiv"><Card.Img variant="top" className="w-25 my-auto" src={Img2} /></div>
                  <Card.Body>
                     <Card.Title className="fs-3 text-center">Indexed Universal Life</Card.Title>
                     <Card.Text className="mt-4 w-75 mx-auto cardText">
                        Final Expense insurance will cover you for life.
                        Prices are locked and will never
                        increase nor will your policy end. These types
                        of policies are designed to make
                        sure all funeral and other end of life
                        expenses are covered
                     </Card.Text>
                  </Card.Body>
               </Card>

               <Card style={{ width: '48%' , borderRadius:'25px'}}
                  className="border-0 py-4"
               >
                  <div className="cardImgDiv"><Card.Img className="w-25" variant="top" src={Img3} /></div>
                  <Card.Body>
                     <Card.Title className="fs-3 text-center">Mortage Protection</Card.Title>
                     <Card.Text className="mt-4 w-75 mx-auto cardText">
                        Final Expense insurance will cover you for life.
                        Prices are locked and will never increase nor will your policy end. These types of policies are designed to make sure all funeral and other end of life expenses are covered.
                     </Card.Text>
                  </Card.Body>
               </Card>

               <Card style={{ width: '48%' , borderRadius:'25px'}}
                  className="border-0 py-4"
               >
                  <div className="cardImgDiv"><Card.Img className="w-25" variant="top" src={Img4} /></div>
                  <Card.Body>
                     <Card.Title className="fs-3 text-center">Fixed Index Annuities</Card.Title>
                     <Card.Text className="mt-4 w-75 mx-auto cardText">
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
   )
}

export default Cards;