import React from "react";
import "./InvoiceContainer.scss";
import InvoicesList from "./InvoicesList/InvoicesList";
import { Switch, Route } from "react-router-dom";
import InvoicePage from "../invoicePage/InvoicePage";

const InvoiceContainer = () => {
  return (
    <div className="invoiceContainer">
      <div className="invoiceBox">
        {/* <InvoicesList/> */}
        <Switch>
          <Route exact path="/:id" component={InvoicePage} />
          <Route path="/" component={InvoicesList} />
        </Switch>
      </div>
    </div>
  );
};

export default InvoiceContainer;
