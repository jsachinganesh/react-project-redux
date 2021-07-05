import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EditBarContext from "../../context/editBarRef/EditBarContext";
import {
  deleteInvoice,
  getOneInvoice,
  updateCurrentInvoice,
  updateInvoice,
} from "../../redux-store/actions/InvoiceAction";
import "./InvoicePage.scss";

const InvoicePage = (props) => {
  const editBarContext = React.useContext(EditBarContext);
  const [btnSet, setbtnSet] = React.useState(false);

  const [invoiceData, setInvoiceData] = React.useState("");
  React.useEffect(() => {
    callItemData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.uid]);

  React.useEffect(() => {
    if (props.currentInvoice) {
    }

    const { match } = props;
    const { id } = match.params;
    setInvoiceData(props.currentInvoice);
    if (props.currentInvoice?.isPaid === "pending") {
      setbtnSet(true);
    }
    editBarContext.addInvoice(props.currentInvoice);
    editBarContext.putID(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentInvoice]);

  const markAsPaid = (e) => {
    const { match, uid } = props;
    const { id } = match.params;
    let invoice = props.currentInvoice;
    invoice.isPaid = "paid";

    props.updateCurrentInvoice(invoice);
    setInvoiceData(invoice);
    props.updateInvoice(uid, id, invoice);
    setbtnSet(false);
  };

  const callItemData = async () => {
    const { match, uid } = props;
    const { id } = match.params;
    props.getOneInvoice(uid, id);
  };

  const deleteHandler = (e) => {
    const { match, uid } = props;
    const { id } = match.params;
    props.deleteInvoice(uid, id);
    return props.history.push("/");
  };

  const handlerEdit = (e) => {
    if (window.innerWidth > 600) {
      editBarContext.editBarRef.current.style.transform = "translateX(0)";
    } else {
      editBarContext.editBarRef.current.style.transform = "translateX(0)";
      editBarContext.editBarRef.current.style.marginLeft = "1px";
    }
  };

  return (
    <div className="invoicePage">
      {invoiceData !== "" && (
        <React.Fragment>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="invoicePageBoxLink">{"< Go Back"}</div>
          </Link>
          <div className="invoicePageBoxEdit">
            <div className="invoicePageBoxEditStatus">
              <div className="text">Status</div>
              <div className={`statusText ${invoiceData?.isPaid}`}>
                {invoiceData?.isPaid}
              </div>
            </div>
            <div className="invoicePageBoxEditStatusBtns">
              <button onClick={handlerEdit} className="edit">
                Edit
              </button>
              <button onClick={deleteHandler} className="delete">
                Delete
              </button>
              {btnSet && (
                <button onClick={markAsPaid} className="markBtn">
                  Mask as Paid
                </button>
              )}
            </div>
          </div>
          <div className="invoicePageBoxDisplay">
            <div className="invoicePageBoxDisplayBoxUS">
              <div className="idAndName">
                <div className="idhash">#{invoiceData?.id}</div>
                <div className="namehash">{invoiceData?.desc}</div>
              </div>
              <div className="addBro">
                <div className="adds">{invoiceData?.adds}</div>
                <div className="city">{invoiceData?.city}</div>
                <div className="street">{invoiceData?.postCode}</div>
                <div className="country">{invoiceData?.country}</div>
              </div>
            </div>
            <div className="invoicePageBoxDisplayBoxBILLTO">
              <div className="invoicesBoxDATE">
                <div className="invoiceDate marginDate">
                  <div className="text">Invoice Date</div>
                  <div className="date">{invoiceData?.date}</div>
                </div>
                <div className="invoicePay">
                  <div className="text">Payment Due</div>
                  <div className="date">{invoiceData?.lastDate}</div>
                </div>
              </div>
              <div className="invoicesBoxBILLTO">
                <div className="billTo">Bill To</div>
                <div className="invoiceName">{invoiceData?.clientName}</div>
                <div className="addsInvoice">
                  <div className="adds">{invoiceData?.clientadds}</div>
                  <div className="city">{invoiceData?.clientCity}</div>
                  <div className="street">{invoiceData?.clientPostCode}</div>
                  <div className="country">{invoiceData?.clientCountry}</div>
                </div>
              </div>
              <div className="invoicesBoxSENT_TO">
                <div className="">Send To</div>
                <div className="emailCLient">{invoiceData?.clientEmail}</div>
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
                <div className="">₹ {invoiceData?.amountToPay}</div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state.invoiesState.invoices,
    currentInvoice: state.invoiesState.currentInvoice,
    uid: state?.auth?.user?.uid,
  };
};

const mapStateToDispatch = {
  getOneInvoice,
  deleteInvoice,
  updateInvoice,
  updateCurrentInvoice,
};

export default connect(mapStateToProps, mapStateToDispatch)(InvoicePage);

// const BoxADDItem = () => {
//   return (
//     <tr>
//       <td>Web Design</td>
//       <td>1</td>
//       <td className="priceMargin">₹ 9000</td>
//       <td>₹ 9000</td>
//     </tr>
//   );
// };
