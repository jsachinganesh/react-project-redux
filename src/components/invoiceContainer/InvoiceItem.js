import React from "react";
import { Link } from "react-router-dom";
import "./InvoiceItem.scss";
const InvoiceItem = () => {
  return (
    <Link to="HSS6SQ" style={{ textDecoration: "none" }}>
      <div className="invoiceItem">
        <div className="box1InvoicesItem">
          <div className="invoiceItemID">#HSS6SQ</div>
          <div className="invoiceItemDATE">Due 19/10/2021</div>
          <div className="invoiceItemName">James Gun</div>
        </div>
        <div className="box2InvoicesItem">
          <div className="invoiceItemAmount">₹ 50000</div>
          <div className="statusInvociesItem">
            <div className="statusInvocies paid">Paid</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InvoiceItem;
