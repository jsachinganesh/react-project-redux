import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./InvoiceContainer.scss";
import InvoicesList from "./InvoicesList/InvoicesList";
import { Switch, Route } from "react-router-dom";
import InvoicePage from "../invoicePage/InvoicePage";
import { ToastContainer } from 'react-toastify';
import { connect } from "react-redux";
import { addUser } from "../../redux-store/actions/AuthAction";
import { auth } from "../../firebase/firebase";

const InvoiceContainer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  React.useEffect(()=>{
    props.addUser(user);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user]);

  return (
    <div className="invoiceContainer">
      <div className="invoiceBox">
        {/* <InvoicesList/> */}
        <Switch>
          <Route exact path="/:id" component={InvoicePage} />
          <Route path="/" component={InvoicesList} />
        </Switch>
      </div>
      <ToastContainer />
      {/* <div ref={toastRef}></div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state?.auth?.user?.user?.uid,
  };
};

const mapStateToDispatch = {
  addUser,
};


export default connect(mapStateToProps,mapStateToDispatch)(InvoiceContainer);
