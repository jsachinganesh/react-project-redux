import "./App.scss";
import React from "react";
import Header from "./components/header/Header";
import InvoiceContainer from "./components/invoiceContainer/InvoiceContainer";
import CreateInvoiceBar from "./components/sideBar/createInvoiceBar/CreateInvoiceBar";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { Redirect } from "react-router-dom";
// import InvoicePage from './components/invoicePage/InvoicePage';
import LogOutBar from "./components/sideBar/logoutBar/LogOutBar";
import AddNewInvoiceRef from "./context/AddNewInvoiceRef/AddNewInvoiceRef";
import EditBarRef from "./context/editBarRef/EditBarRef";

import SideBarState from "./context/SideBarRef";
import { connect } from "react-redux";
import { addUser } from "./redux-store/actions/AuthAction";
import EditSideBar from "./components/sideBar/EditSideBar/EditSideBar";


// import SignUp from './components/auth/signup/SignUp';
// import Login from './components/auth/login/Login';

function App(props) {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  // if (user) {
  //   console.log(user.uid);
  //   props.addUser(user);
  // }

  

  return (
    <EditBarRef>
      <SideBarState>
        
        <AddNewInvoiceRef>
          <div className="app">
            <Header />
            <LogOutBar />
            <CreateInvoiceBar />
            <EditSideBar/>
            <InvoiceContainer />
          </div>
        </AddNewInvoiceRef>
      </SideBarState>
    </EditBarRef>
    
  );
}

const mapStateToProps = (state) => {
  return {
    uid: state?.auth?.user?.user?.uid,
  };
};

const mapStateToDispatch = {
  addUser,
};

export default connect(mapStateToProps, mapStateToDispatch)(App);
