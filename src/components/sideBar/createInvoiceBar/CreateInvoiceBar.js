import React from "react";
import { connect } from "react-redux";
import AddNewInvoiceContext from "../../../context/AddNewInvoiceRef/AddNewInvoiceContext";
import { AddNewInvoice } from "../../../redux-store/actions/InvoiceAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateInvoiceBar.scss";

const CreateInvoiceBar = (props) => {
  const addInvoiceRef = React.useContext(AddNewInvoiceContext);

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

  const handleClose = (e) => {
    console.log(window.innerWidth);

    addInvoiceRef.current.style.transform = "translateX(-200%)";
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // ToastContainer.

    if (isPaid !== "pending") {
      await setisPaid("paid");
    }

    if (amountToPay <= 0) {
      return toast("Amount Should Be More Than 0");
    }

    props.AddNewInvoice(
      {
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
        isPaid,
        desc,
        amountToPay,
        date,
        lastDate,
        time:new Date(),
        id: Math.floor(100000 + Math.random() * 900000),
      },
      props.uid
    );

    console.log("done");
    toast("New Invoice Created!!");
    handleClose();

    setAdds("");
    setCity("");
    setPostCode("");
    setCountry("");
    setClientName("");
    setClientEmail("");
    setClientadds("");
    setClientCity("");
    setClientPostCode("");
    setClientCountry("");
    setisPaid("pending");
    setDesc("");
    setAmountToPay("");
    setDate("");
    setLastDate("");
  };

  return (
    <div ref={addInvoiceRef} className="createInvoiceBar">
      <div onClick={handleClose} className="logClose">
        X
      </div>
      <div className="container">
        <form onSubmit={formSubmitHandler}>
          <h1>Add A INVOICE</h1>
          <div className="billTitle">Bill Form</div>
          <div className="myBill">
            <div className="mybillBox mybillBoxAdd">
              <label htmlFor="myBillBox">Street Address</label>
              <input
                value={adds}
                onChange={(e) => setAdds(e.target.value)}
                required
                id="myBillBox"
                type="text"
              />
            </div>
            <div className="mybillBox mybillBoxTrio">
              <div className="trio">
                <label htmlFor="mybillBoxCity">City</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  id="mybillBoxCity"
                  type="text"
                />
              </div>
              <div className="trio">
                <label htmlFor="mybillBoxPostCode">PostCode</label>
                <input
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                  required
                  id="mybillBoxPostCode"
                  type="text"
                />
              </div>
              <div className="trio">
                <label htmlFor="mybillBoxCountry">Country</label>
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  id="mybillBoxCountry"
                  type="text"
                />
              </div>
            </div>
            <div className="billToBro">Bill To</div>
            <div className="clientPart">
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="myBillBoxClientName">Client Name</label>
                <input
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  id="myBillBoxClientName"
                  type="text"
                />
              </div>
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="myBillBoxClientEmail">Client Email</label>
                <input
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                  id="myBillBoxClientEmail"
                  type="email"
                />
              </div>
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="myBillBoxClient">Street Address</label>
                <input
                  value={clientadds}
                  onChange={(e) => setClientadds(e.target.value)}
                  required
                  id="myBillBoxClient"
                  type="text"
                />
              </div>
              <div className="mybillBox mybillBoxTrio">
                <div className="trio">
                  <label htmlFor="mybillBoxClientCity">City</label>
                  <input
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    required
                    id="mybillBoxClientCity"
                    type="text"
                  />
                </div>
                <div className="trio">
                  <label htmlFor="mybillBoxClientPostCode">PostCode</label>
                  <input
                    value={clientPostCode}
                    onChange={(e) => setClientPostCode(e.target.value)}
                    required
                    id="mybillBoxClientPostCode"
                    type="text"
                  />
                </div>
                <div className="trio">
                  <label htmlFor="mybillBoxClientCountry">Country</label>
                  <input
                    value={clientCountry}
                    onChange={(e) => setClientCountry(e.target.value)}
                    required
                    id="mybillBoxClientCountry"
                    type="text"
                  />
                </div>
              </div>
              <div className="dateClient">
                <div className="invoiceDateClient">
                  <label htmlFor="inDateClient">Invoice Date</label>
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    id="inDateClient"
                    type="date"
                  />
                </div>
                <div className="invoiceDateClient">
                  <label htmlFor="paymentClient">Payment Terms</label>
                  <input
                    onChange={(e) => setLastDate(e.target.value)}
                    value={lastDate}
                    id="paymentClient"
                    type="date"
                  />
                </div>
              </div>
              <div className="paidServe">
                <label htmlFor="paidS">At to be paid?</label>
                <input
                  value={isPaid}
                  onChange={(e) => setisPaid(e.target.value)}
                  id="paidS"
                  type="text"
                  placeholder="default Pending"
                />
              </div>
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="myBillBoxClientDes">Describe</label>
                <input
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                  id="myBillBoxClientDes"
                  type="text"
                />
              </div>
              <div className="mybillBox mybillBoxAdd">
                <label htmlFor="myBillBoxClientAMount">Amount</label>
                <input
                  value={amountToPay}
                  onChange={(e) => setAmountToPay(e.target.value)}
                  required
                  id="myBillBoxClientAMount"
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
  };
};

const mapStateToDispatch = {
  AddNewInvoice,
};

export default connect(mapStateToProps, mapStateToDispatch)(CreateInvoiceBar);
