import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import './styling/tabStyles.scss'
import cheerfulColleagues from '../assets/images/cheerful-colleagues-looking-plans-paper.jpg'


const Servicetabs = () => {


   return(

      <Tabs
         defaultActiveKey="debtConsolidation"
         id="services-tabs"
         fill
         >

          <Tab eventKey="debtConsolidation" title="Debt Consolidation">
            <div className="row align-items-center">
               {/* Column for the image */}
               <div className="col-md-5 d-flex justify-content-center">
                  <img src={cheerfulColleagues} alt="" className="rounded-circle tabs-img w-100"/>
               </div>
               {/* Column for the text */}
               <div className="col-md-7 h-100 d-flex gap-4 flex-column justify-content-center p-auto">
                  <h4 className="custom-heading fw-bold">We help reduce total debt and reorganize it so you can pay it off faster. We currently offer three various debt consolidation options for our clients.</h4>
                  <p className="custom-paragraph">Debt Validation auditing process that simply holds the debtor or collection agency accountable for lending, credit, and collection law. Debt Assumption is a proprietary program that assumes YOUR Debt by becoming a co-debtor. They take on co-responsibility for the debt with a client. Debt Settlement is a negotiated agreement by which a creditor accepts less than a the total amount owed to legally satisfy a debt. This is a more aggressive management yet extremely useful tactic.</p>
               </div>
            </div>
          </Tab>

          <Tab eventKey="retirementPortfolio" title="Retirement Portfolio">
            <div className="row align-items-center">
               {/* Column for the image */}
               <div className="col-md-5 d-flex justify-content-center">
                  <img src={cheerfulColleagues} alt="" className="rounded-circle tabs-img w-100"/>
               </div>
               {/* Column for the text */}
               <div className="col-md-7 h-100 d-flex gap-4 flex-column justify-content-center p-auto">
                  <h4 className="custom-heading fw-bold">We help reduce total debt and reorganize it so you can pay it off faster. We currently offer three various debt consolidation options for our clients.</h4>
                  <p className="custom-paragraph">Debt Validation auditing process that simply holds the debtor or collection agency accountable for lending, credit, and collection law. Debt Assumption is a proprietary program that assumes YOUR Debt by becoming a co-debtor. They take on co-responsibility for the debt with a client. Debt Settlement is a negotiated agreement by which a creditor accepts less than a the total amount owed to legally satisfy a debt. This is a more aggressive management yet extremely useful tactic.</p>
               </div>
            </div>
          </Tab>

          <Tab eventKey="mortgageProtection" title="Mortgage Protection">
            <div className="row align-items-center">
               {/* Column for the image */}
               <div className="col-md-5 d-flex justify-content-center">
                  <img src={cheerfulColleagues} alt="" className="rounded-circle tabs-img w-100"/>
               </div>
               {/* Column for the text */}
               <div className="col-md-7 h-100 d-flex gap-4 flex-column justify-content-center p-auto">
                  <h4 className="custom-heading fw-bold">We help reduce total debt and reorganize it so you can pay it off faster. We currently offer three various debt consolidation options for our clients.</h4>
                  <p className="custom-paragraph">Debt Validation auditing process that simply holds the debtor or collection agency accountable for lending, credit, and collection law. Debt Assumption is a proprietary program that assumes YOUR Debt by becoming a co-debtor. They take on co-responsibility for the debt with a client. Debt Settlement is a negotiated agreement by which a creditor accepts less than a the total amount owed to legally satisfy a debt. This is a more aggressive management yet extremely useful tactic.</p>
               </div>
            </div>
          </Tab>

          <Tab eventKey="healthMatchingAccounts" title="Health Matching Accounts">
            <div className="row align-items-center">
               {/* Column for the image */}
               <div className="col-md-5 d-flex justify-content-center">
                  <img src={cheerfulColleagues} alt="" className="rounded-circle tabs-img w-100"/>
               </div>
               {/* Column for the text */}
               <div className="col-md-7 h-100 d-flex gap-4 flex-column justify-content-center p-auto">
                  <h4 className="custom-heading fw-bold">We help reduce total debt and reorganize it so you can pay it off faster. We currently offer three various debt consolidation options for our clients.</h4>
                  <p className="custom-paragraph">Debt Validation auditing process that simply holds the debtor or collection agency accountable for lending, credit, and collection law. Debt Assumption is a proprietary program that assumes YOUR Debt by becoming a co-debtor. They take on co-responsibility for the debt with a client. Debt Settlement is a negotiated agreement by which a creditor accepts less than a the total amount owed to legally satisfy a debt. This is a more aggressive management yet extremely useful tactic.</p>
               </div>
            </div>
          </Tab>

          <Tab eventKey="medicareSupplements" title="Medicare Supplements">
            <div className="row align-items-center">
               {/* Column for the image */}
               <div className="col-md-5 d-flex justify-content-center">
                  <img src={cheerfulColleagues} alt="" className="rounded-circle tabs-img w-100"/>
               </div>
               {/* Column for the text */}
               <div className="col-md-7 h-100 d-flex gap-4 flex-column justify-content-center p-auto">
                  <h4 className="custom-heading fw-bold">We help reduce total debt and reorganize it so you can pay it off faster. We currently offer three various debt consolidation options for our clients.</h4>
                  <p className="custom-paragraph">Debt Validation auditing process that simply holds the debtor or collection agency accountable for lending, credit, and collection law. Debt Assumption is a proprietary program that assumes YOUR Debt by becoming a co-debtor. They take on co-responsibility for the debt with a client. Debt Settlement is a negotiated agreement by which a creditor accepts less than a the total amount owed to legally satisfy a debt. This is a more aggressive management yet extremely useful tactic.</p>
               </div>
            </div>
          </Tab>

          <Tab eventKey="finalExpense" title="Final Expense">
            <div className="row align-items-center">
               {/* Column for the image */}
               <div className="col-md-5 d-flex justify-content-center">
                  <img src={cheerfulColleagues} alt="" className="rounded-circle tabs-img w-100"/>
               </div>
               {/* Column for the text */}
               <div className="col-md-7 h-100 d-flex gap-4 flex-column justify-content-center p-auto">
                  <h4 className="custom-heading fw-bold">We help reduce total debt and reorganize it so you can pay it off faster. We currently offer three various debt consolidation options for our clients.</h4>
                  <p className="custom-paragraph">Debt Validation auditing process that simply holds the debtor or collection agency accountable for lending, credit, and collection law. Debt Assumption is a proprietary program that assumes YOUR Debt by becoming a co-debtor. They take on co-responsibility for the debt with a client. Debt Settlement is a negotiated agreement by which a creditor accepts less than a the total amount owed to legally satisfy a debt. This is a more aggressive management yet extremely useful tactic.</p>
               </div>
            </div>
          </Tab>
          
        </Tabs>
   )
}

export default Servicetabs;