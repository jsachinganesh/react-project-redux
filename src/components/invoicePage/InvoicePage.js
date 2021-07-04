import React from "react";
import { Link } from "react-router-dom";
import "./InvoicePage.scss";
const InvoicePage = () => {
  return (
    <div className="invoicePage">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="invoicePageBoxLink">{"< Go Back"}</div>
      </Link>
      <div className="invoicePageBoxEdit">
        <div className="invoicePageBoxEditStatus">
          <div className="text">Status</div>
          <div className="statusText pending">Pending</div>
        </div>
        <div className="invoicePageBoxEditStatusBtns">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
          <button className="markBtn">Mask as Paid</button>
        </div>
      </div>
      <div className="invoicePageBoxDisplay">
        <div className="invoicePageBoxDisplayBoxUS">
          <div className="idAndName">
            <div className="idhash">#HSS6SQ</div>
            <div className="namehash">Graphic Design</div>
          </div>
          <div className="addBro">
            <div className="adds">19 Union Terrace</div>
            <div className="city">London</div>
            <div className="street">E1 3EZ</div>
            <div className="country">United Kingdom</div>
          </div>
        </div>
        <div className="invoicePageBoxDisplayBoxBILLTO">
          <div className="invoicesBoxDATE">
            <div className="invoiceDate marginDate">
              <div className="text">Invoice Date</div>
              <div className="date">21 Aug 2021</div>
            </div>
            <div className="invoicePay">
              <div className="text">Payment Due</div>
              <div className="date">20 Sep 2021</div>
            </div>
          </div>
          <div className="invoicesBoxBILLTO">
            <div className="billTo">Bill To</div>
            <div className="invoiceName">Alex Doe</div>
            <div className="addsInvoice">
              <div className="adds">19 Union Terrace</div>
              <div className="city">London</div>
              <div className="street">E1 3EZ</div>
              <div className="country">United Kingdom</div>
            </div>
          </div>
          <div className="invoicesBoxSENT_TO">
            <div className="">Send To</div>
            <div className="emailCLient">AlexDoe@gamming.com</div>
          </div>
        </div>
        <div className="invoicePageBoxDisplayBoxItems">
          {/* <div className="namesBoxHeader">
                        <div className="itemNameBro">Item Name</div>
                        <div className="qtyBro">QTY</div>
                        <div className="priceBro">Price</div>
                        <div className="totalBro">
                            <div className="">Total</div>
                        </div>
                    </div>
                    <div className="featureBox">
                        <div className="itemNameBro">John</div>
                        <div className="qtyBro">1</div>
                        <div className="priceBro">₹ 9000</div>
                        <div className="totalBro">
                            <div className="">₹ 9000</div>
                        </div>
                    </div> */}
          {/* <table>
                        
                        <thead>
                            <tr>
                                <td>Item Name</td>
                                <td>QTY</td>
                                <td>Price</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Web Design</td>
                                <td>1</td>
                                <td className="priceMargin">₹ 9000</td>
                                <td>₹ 9000</td>
                            </tr>
                            <BoxADDItem/>
                            <BoxADDItem/>
                            <BoxADDItem/>
                            <BoxADDItem/>
                        </tbody>
                    </table> */}

          <div className="amountBRODOWN">
            <div className="">Amount</div>
            <div className="">₹ 90000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;

const BoxADDItem = () => {
  return (
    <tr>
      <td>Web Design</td>
      <td>1</td>
      <td className="priceMargin">₹ 9000</td>
      <td>₹ 9000</td>
    </tr>
  );
};
