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
                     Final Expense Insurance provides lifelong coverage with fixed quotations that will never increase. These policies are specifically designed to ensure that funerals and end-of-life expenses are fully covered, offering you and your loved ones peace of mind.
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
                     Indexed Universal Life Insurance offers flexible, lifelong coverage with the potential for cash value growth tied to market index performance. This policy not only provides financial protection but also an opportunity for wealth accumulation, ensuring a secure future for you and your loved ones.
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
                     Mortgage Protection Insurance ensures your home is safeguarded by covering your mortgage payments in the event of death, disability, or critical illness. This policy provides peace of mind, knowing your loved ones will remain secure in their home no matter what life brings.
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
                     Fixed Indexed Annuities offer a secure way to grow your retirement savings with the potential for higher returns linked to market index performance. These annuities provide guaranteed income, protection against market downturns, and a reliable strategy for a stable financial future.
                     </Card.Text>
                  </Card.Body>
               </Card>

      </div>
   )
}

export default Cards;