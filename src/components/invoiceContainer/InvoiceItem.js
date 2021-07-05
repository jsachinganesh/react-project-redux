import React from "react";
import { Link } from "react-router-dom";
import "./InvoiceItem.scss";
const InvoiceItem = ({ item }) => {
  return (
    <Link to={item.docID} style={{ textDecoration: "none" }}>
      <div className="invoiceItem">
        <div className="box1InvoicesItem">
          <div className="invoiceItemID">#{item.id}</div>
          <div className="invoiceItemDATE">Due {item.lastDate}</div>
          <div className="invoiceItemName">{item.clientName}</div>
        </div>
        <div className="box2InvoicesItem">
          <div className="invoiceItemAmount">₹ {item.amountToPay}</div>
          <div className="statusInvociesItem">
            <div className={`statusInvocies ${item.isPaid}`}>{item.isPaid}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InvoiceItem;
