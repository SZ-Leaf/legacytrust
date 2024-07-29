import Button from "react-bootstrap/Button";
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'

const Careers = () => {
  return(
    <section class="vw-100 row sectionColor mt-5 mx-0 px-0" style={{paddingTop:'3.5rem'}}>

      <div className="col-1"></div>

      <div className="col-5 d-flex row py-5 mb-5">
        <p className="text-uppercase m-0 p-0">since the beginning</p>
        <h1 className="fw-bold p-0" style={{color:'#002768'}}>We value teamwork, continuous improvement, integrity, accountability and sefl-awareness.</h1>
        <p className="p-0">When Legacy Trust was founded in 2020 we set out to improve the financial health and security of middle-income America. Today, our values continue to guide us and our mission is more important than ever.</p>
        <Button className="fw-bold bg-darkblue col-5" id="blueBtn">Learn More</Button>
      </div>

      <div className="w-100 bg-white flex-wrap d-flex justify-content-center pt-5 px-0" style={{paddingBottom:'10rem'}}>

        <div className="col-11 d-flex fs-1 fw-bold p-5 justify-content-between" style={{backgroundColor:'#AECFFF'}}>
          <p>We're Hiring!</p>
          <Button className="fw-bold bg-darkblue px-5 py-2 w-25">See Open Roles</Button>
        </div>

        <div className="col-10 d-flex pt-5 mt-5 flex-wrap" style={{gap:'130px'}}>

          <div className="w-100 text-center">
            <p className="text-uppercase m-0 fs-5">What we stand for</p>
            <h2 className="" style={{ fontSize:'54px' }}>Our core values</h2>
          </div>

          <div className="d-grid col-12 mx-auto gap-4">

            {/* Row 1 */}
            <div className="row align-items-center justify-content-evenly">

              <div className="col-1">
                <img src={logo1} alt="Image 1" className="" style={{width:'150%'}} />
              </div>
              <div className="col-2">
                <h2>Accountability</h2>
              </div>

              <div className="col-7 ps-5">
                <p>To be successful you have to have the team's best interest at heart at all times. We support our agents and their families' success, in the same manner, we fight to protect our clients.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row align-items-center justify-content-evenly">

              <div className="col-1">
                <img src={logo2} alt="Image 2" className="" style={{width:'150%'}} />
              </div>
              <div className="col-2">
                <h2>Dedication</h2>
              </div>

              <div className="col-7 ps-5">
                <p>We are driven by our commitment to change the lives of clients and our agents. We are not moved by the "feeling" of doing good.</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="row align-items-center justify-content-evenly">

              <div className="col-1">
                <img src={logo3} alt="Image 3" className="" style={{width:'150%'}} />
              </div>
              <div className="col-2">
                <h2>Teamwork</h2>
              </div>

              <div className="col-7 ps-5">
                <p>We are driven by our commitment to change the lives of clients and our agents. We are not moved by the "feeling" of doing good.</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="row align-items-center justify-content-evenly">

              <div className="col-1">
                <img src={logo4} alt="Image 3" className="" style={{width:'140%'}} />
              </div>
              <div className="col-2">
                <h2>Growth</h2>
              </div>
              
              <div className="col-7 ps-5">
                <p>We are driven by our commitment to change the lives of clients and our agents. We are not moved by the "feeling" of doing good.</p>
              </div>
            </div>


          </div>

        </div>

      </div>

      <div className="w-100 mt-5 text-center">
        <p className="text-uppercase fw-semibold fs-4 m-0">We work with the best</p>
        <h2 className="fw-bold fs-1">Over 40+ Carriers</h2>
      </div>

    </section>
  )
}

export default Careers;
