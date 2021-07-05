import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditBarContext from "../../../context/editBarRef/EditBarContext";
import { updateInvoice } from "../../../redux-store/actions/InvoiceAction";
import "./EditSideBar.scss";

const EditSideBar = (props) => {
  const editBarContext = React.useContext(EditBarContext);
  // eslint-disable-next-line no-unused-vars
  const [invoiceData, setInvoiceData] = React.useState({});
  const [adds, setAdds] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postCode, setPostCode] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [clientName, setClientName] = React.useState("");
  const [clientEmail, setClientEmail] = React.useState("");
  const [clientadds, setClientadds] = React.useState("");
  const [clientCity, setClientCity] = React.useState("");
  const [clientPostCode, setClientPostCode] = React.useState("");
  const [clientCountry, setClientCountry] = React.useState("");
  const [isPaid, setisPaid] = React.useState("pending");
  const [desc, setDesc] = React.useState("");
  const [amountToPay, setAmountToPay] = React.useState("");
  const [date, setDate] = React.useState("");
  const [lastDate, setLastDate] = React.useState("");
  const [docID,setDocID]  = React.useState(0);
  React.useEffect(() => {
    const invoice = props.currentInvoice;
    const docID = editBarContext.state.docID;
    
    console.log(docID);
    if (invoice?.date) {
      console.log(invoice);
      setDocID(docID);
      setInvoiceData(editBarContext.state.invoice);
      setAdds(invoice.adds);
      setCity(invoice.city);
      setPostCode(invoice.postCode);
      setCountry(invoice.country);
      setClientName(invoice.clientName);
      setClientEmail(invoice.clientEmail);
      setClientadds(invoice.clientadds);
      setClientCity(invoice.clientCity);
      setClientPostCode(invoice.clientPostCode);
      setClientCountry(invoice.clientCountry);
      setisPaid(invoice.isPaid);
      setDesc(invoice.desc);
      setAmountToPay(invoice.amountToPay);
      setDate(invoice.date);
      setLastDate(invoice.lastDate);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editBarContext.state]);

  const handleClose = (e) => {
    console.log(window.innerWidth);

    editBarContext.editBarRef.current.style.transform = "translateX(-200%)";
  };


  

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // ToastContainer.
    let pay;
    if (isPaid !== "pending") {
    
      pay = "paid";
    }else{
      pay='pending';
    }

    

    if (amountToPay <= 0) {
      return toast("Amount Should Be More Than 0");
    }

    props.updateInvoice(props.uid, docID, {
      adds,
      city,
      postCode,
      country,
      clientName,
      clientEmail,
      clientadds,
      clientCity,
      clientPostCode,
      clientCountry,
      isPaid:pay,
      desc,
      amountToPay,
      date,
      id:props.currentInvoice.id,
      lastDate,
    });
    toast("New Invoice Created!!");
    handleClose();
  };

  return (
    <div ref={editBarContext.editBarRef} className="createInvoiceBar">
      <div onClick={handleClose} className="logClose">
        X
      </div>
      <div className="container">
        <form onSubmit={formSubmitHandler}>
          <h1>EDIT INVOICE</h1>
          <div className="billTitle">Bill Form</div>
          <div className="myBill">
            <div className="mybillBox mybillBoxAdd">
              <label htmlFor="EditSideBarmyBillBox">Street Address</label>
              <input
                value={adds}
                onChange={(e) => setAdds(e.target.value)}
                required
                id="EditSideBarmyBillBox"
                type="text"
              />
            </div>
            <div className="mybillBox mybillBoxTrio">
              <div className="trio">
                <label htmlFor="EditSideBarmybillBoxCity">City</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  id="EditSideBarmybillBoxCity"
                  type="text"
                />
              </div>
              <div className="trio">
                <label htmlFor="EditSideBarmybillBoxPostCode">PostCode</label>
                <input
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                  required
                  id="EditSideBarmybillBoxPostCode"
                  type="text"
                />
              </div>
              <div className="trio">
                <label htmlFor="EditSideBarmybillBoxCountry">Country</label>
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  id="EditSideBarmybillBoxCountry"
                  type="text"
                />
              </div>
            </div>
            <div className="billToBro">Bill To</div>
            <div className="clientPart">
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="EditSideBarmyBillBoxClientName">
                  Client Name
                </label>
                <input
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  id="EditSideBarmyBillBoxClientName"
                  type="text"
                />
              </div>
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="EditSideBarmyBillBoxClientEmail">
                  Client Email
                </label>
                <input
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                  id="EditSideBarmyBillBoxClientEmail"
                  type="email"
                />
              </div>
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="EditSideBarmyBillBoxClient">
                  Street Address
                </label>
                <input
                  value={clientadds}
                  onChange={(e) => setClientadds(e.target.value)}
                  required
                  id="EditSideBarmyBillBoxClient"
                  type="text"
                />
              </div>
              <div className="mybillBox mybillBoxTrio">
                <div className="trio">
                  <label htmlFor="EditSideBarmybillBoxClientCity">City</label>
                  <input
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    required
                    id="EditSideBarmybillBoxClientCity"
                    type="text"
                  />
                </div>
                <div className="trio">
                  <label htmlFor="EditSideBarmybillBoxClientPostCode">
                    PostCode
                  </label>
                  <input
                    value={clientPostCode}
                    onChange={(e) => setClientPostCode(e.target.value)}
                    required
                    id="EditSideBarmybillBoxClientPostCode"
                    type="text"
                  />
                </div>
                <div className="trio">
                  <label htmlFor="EditSideBarmybillBoxClientCountry">
                    Country
                  </label>
                  <input
                    value={clientCountry}
                    onChange={(e) => setClientCountry(e.target.value)}
                    required
                    id="EditSideBarmybillBoxClientCountry"
                    type="text"
                  />
                </div>
              </div>
              <div className="dateClient">
                <div className="invoiceDateClient">
                  <label htmlFor="EditSideBarinDateClient">Invoice Date</label>
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    id="EditSideBarinDateClient"
                    type="date"
                  />
                </div>
                <div className="invoiceDateClient">
                  <label htmlFor="EditSideBarpaymentClient">
                    Payment Terms
                  </label>
                  <input
                    onChange={(e) => setLastDate(e.target.value)}
                    value={lastDate}
                    id="EditSideBarpaymentClient"
                    type="date"
                  />
                </div>
              </div>
              <div className="paidServe">
                <label htmlFor="EditSideBarpaidS">At to be paid?</label>
                <input
                  value={isPaid}
                  onChange={(e) => setisPaid(e.target.value)}
                  id="EditSideBarpaidS"
                  type="text"
                  placeholder="default Pending"
                />
              </div>
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="EditSideBarmyBillBoxClientDes">Describe</label>
                <input
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                  id="EditSideBarmyBillBoxClientDes"
                  type="text"
                />
              </div>
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="EditSideBarmyBillBoxClientAMount">Amount</label>
                <input
                  value={amountToPay}
                  onChange={(e) => setAmountToPay(e.target.value)}
                  required
                  id="EditSideBarmyBillBoxClientAMount"
                  type="number"
                />
              </div>
            </div>

            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>

          <div className="spaceing">ds</div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state?.auth?.user?.uid,
    currentInvoice: state.invoiesState.currentInvoice,
  };
};

const mapStateToDispatch = {
  updateInvoice,
};

export default connect(mapStateToProps, mapStateToDispatch)(EditSideBar);
