import "./App.scss";
import React from 'react';
import Header from "./components/header/Header";
import InvoiceContainer from "./components/invoiceContainer/InvoiceContainer";
import CreateInvoiceBar from "./components/sideBar/createInvoiceBar/CreateInvoiceBar";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { Redirect } from "react-router-dom";
// import InvoicePage from './components/invoicePage/InvoicePage';
import LogOutBar from "./components/sideBar/logoutBar/LogOutBar";
import AddNewInvoiceRef from "./context/AddNewInvoiceRef/AddNewInvoiceRef";

import SideBarState from "./context/SideBarRef";

// import SignUp from './components/auth/signup/SignUp';
// import Login from './components/auth/login/Login';

function App() {
  const [user, loading, error] = useAuthState(auth);

  if(!user){
    return <Redirect to="/login" />
  }

  
  

  return (
    <SideBarState>
      <AddNewInvoiceRef>
        <div className="app">
          <Header />
          <LogOutBar />
          <CreateInvoiceBar />

          <InvoiceContainer />
        </div>
      </AddNewInvoiceRef>
    </SideBarState>
  );
}

export default App;
