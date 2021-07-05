import React from "react";
import "./InvoicesList.scss";
import plus from "../../../assets/icon-plus.svg";
import InvoiceItem from "../InvoiceItem";
import AddNewInvoiceContext from "../../../context/AddNewInvoiceRef/AddNewInvoiceContext";
import { connect } from "react-redux";
import { getAllInvoices, getPaidAllInvoices, getPendingAllInvoices } from "../../../redux-store/actions/InvoiceAction";



const InvoicesList = (props) => {
  const addInvoiceRef = React.useContext(AddNewInvoiceContext);
  const [filter, setFilter] = React.useState("createdAt");
  const [invoicesData, setInvoicesData] = React.useState([]);

  React.useEffect(() => {
    async function getAllInvoices(uid) {
      await props.getAllInvoices(uid);
    }
    console.log("Ds");
    getAllInvoices(props.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.uid]);

  React.useEffect(() => {
    console.log(props.invoices);

    setInvoicesData(props.invoices);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.invoices]);

  const selectChangeHandler = (e) => {
    setFilter(e.target.value);
    if(e.target.value === 'paid'){
      props.getPaidAllInvoices(props.uid)
      // console.log(props.uid);
    }else if(e.target.value === 'pending'){
      props.getPendingAllInvoices(props.uid) 
    }else {
      props.getAllInvoices(props.uid);
      console.log(e.target.value);;
    }
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
          <h4>
            There Are {invoicesData ? invoicesData.length : 0} total Invoices
          </h4>
        </div>
        <div className="invoicesBtns">
          <select
            onChange={selectChangeHandler}
            name="filter"
            id="filter"
            value={filter}
          >
            <option value="AllInvoices">All Invoices</option>
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
        {invoicesData !== [] &&
          invoicesData?.map((el, i) => {
            return <InvoiceItem item={el} key={i * 10} />;
          })}
        {/* <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem /> */}

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

const mapStateToProps = (state) => {
  return {
    invoices: state.invoiesState.invoices,
    uid: state?.auth?.user?.uid,
  };
};

const mapStateToDispatch = {
  getAllInvoices,
  getPaidAllInvoices,
  getPendingAllInvoices
};

export default connect(mapStateToProps, mapStateToDispatch)(InvoicesList);
