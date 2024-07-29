import aboutUsImg from "../assets/images/young-man-holding-phone-with-insurance-icon.jpg"

const About = () => {
  return(

    <section className='w-100 mt-5 pt-5' style={{backgroundColor:'#FFFFFF'}}>

      <h1 style={{fontSize:'5rem'}} className='text-center fw-normal'>About Us</h1>
      <h3 className='text-center fs-4 fw-normal'>Get to know who we are, what shapes our vision.</h3>

      <div className='pt-5 cstm-w-80 mx-auto'>
        <div className='row'>

          <div className="" style={{width:'38%'}}>
            <img src={aboutUsImg} alt="Sample" className="img-fluid rounded-circle" />
          </div>

          <div className="col-md-5 h-50 my-auto">
            <p className="text-uppercase">Our Story</p>
            <h1 className="fw-bold" style={{color:'#002768'}}>Every great story starts with a beginning.</h1>
            <p className="mt-4">When Legacy Trust was founded in 2020 we set out to improve the financial health and security of middle-income America. Today, our values continue to guide us and our mission is more important than ever.</p>
          </div>
        </div>
      </div>

      <div className="d-flex fw-bolder flex-wrap w-100 justify-content-evenly mt-6rem py-5 text-center text-white mb-4">

        <div className="aboutBubble py-4 px-4" id="bubble1">
          <h2 className="bubbleTitle">7M+</h2>
          <h3 className='fw-bold'>Protected Families</h3>
          <p style={{fontSize:'12px'}} className='px-5'>Over 20+ years of helping families nationwide, we are proud to say we know a bit about financial health.</p>
        </div>

        <div className="aboutBubble py-4 px-4" id="bubble2">
          <h2 className="bubbleTitle">500+</h2>
          <h3 className='fw-bold'>Active Earners</h3>
          <p style={{fontSize:'12px'}} className='px-5'>Over 20+ years of helping families nationwide, we are proud to say we know a bit about financial health.</p>
        </div>

        <div className="aboutBubble py-4 px-4" id="bubble3">
          <h2 className="bubbleTitle">$6,3M</h2>
          <h3 className='fw-bold'>Annual Policy Premium</h3>
          <p style={{fontSize:'12px'}} className='px-5'>Over 20+ years of helping families nationwide, we are proud to say we know a bit about financial health.</p>
        </div>

      </div>

    </section>
  )
}

export default About;
