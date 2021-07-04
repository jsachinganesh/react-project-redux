import React from "react";
import "./InvoicesList.scss";
import plus from "../../../assets/icon-plus.svg";
import InvoiceItem from "../InvoiceItem";
import AddNewInvoiceContext from "../../../context/AddNewInvoiceRef/AddNewInvoiceContext";

const InvoicesList = () => {
  const addInvoiceRef = React.useContext(AddNewInvoiceContext);
  const [filter, setFilter] = React.useState("createdAt");
  const selectChangeHandler = (e) => {
    setFilter(e.target.value);
  };
  const handlerSidebar = (e) => {
    if (window.innerWidth > 600) {
      addInvoiceRef.current.style.transform = "translateX(0)";
    } else {
      addInvoiceRef.current.style.transform = "translateX(0)";
      addInvoiceRef.current.style.marginLeft = "1px";
    }
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="invoicesHeader">
        <div className="invoicesName">
          <h1>Invoices</h1>
          <h4>There Are 7 total Invoices</h4>
        </div>
        <div className="invoicesBtns">
          <select
            onChange={selectChangeHandler}
            name="filter"
            id="filter"
            value={filter}
          >
            <option value="createdAt">Created At</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
          <div onClick={handlerSidebar} className="newInvoiceBtn">
            <div className="plusBtn">
              <img src={`${plus}`} alt="addInvoice" />
            </div>
            <div className="newInvoiceBtnText">New Invoice</div>
          </div>
        </div>
      </div>
      <div className="invoicesItems">
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />

        {/* <Link to="/HSS6SQ" style={{ textDecoration: 'none' }}>
                    <div className="invoiceItem">
                        <div className="invoiceItemID">#HSS6SQ</div>
                        <div className="invoiceItemDATE">Due 19/10/2021</div>
                        <div className="invoiceItemName">Wow Gun</div>
                        <div className="invoiceItemAmount">₹ 50000</div>
                        <div className="statusInvociesItem">
                            <div className="statusInvocies">
                                Pending
                            </div>
                        </div>
                    </div>
                </Link> */}
      </div>
    </div>
  );
};

export default InvoicesList;
