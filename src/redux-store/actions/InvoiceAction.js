import { USERS_DB } from "../../firebase/firebase";
import { ADD_INVOICE, GET_ALL_INVOICES, GET_ONE_INVOICES, REMOVE_INVOICE, UPDATE_CURR_INVOICE } from "./Types";

export const AddNewInvoice = (invoice, id) => async (dispatch) => {
  const doc = await USERS_DB.doc(id).collection("invoices").add(invoice);
  // const docData = await doc.get().data();
  console.log(doc.id);
  invoice.docID = doc.id;
  dispatch({
    type: ADD_INVOICE,
    payload: invoice,
  });
};

export const getAllInvoices = (id) => async (dispatch) => {
  const data = await USERS_DB.doc(id).collection("invoices").get();
  const dataA = [];
  data.forEach((doc, i) => {
    dataA.push({ ...doc.data(), docID: doc.id });
  });
  // console.log(data, "getAllInvoices");
  dispatch({
    type: GET_ALL_INVOICES,
    payload: dataA,
  });
};

export const getPaidAllInvoices = (id) => async (dispatch) => {
  const data =  USERS_DB.doc(id);
  const col = await data.collection("invoices").where('isPaid', '==', 'paid').get();
  const dataA = [];
  col.forEach((doc, i) => {
    dataA.push({ ...doc.data(), docID: doc.id });
  });
  // console.log(data, "getAllInvoices");
  dispatch({
    type: GET_ALL_INVOICES,
    payload: dataA,
  });
};

export const getPendingAllInvoices = (id) => async (dispatch) => {
  const data =  USERS_DB.doc(id);
  const col = await data.collection("invoices").where('isPaid', '==', 'pending').get();
  const dataA = [];
  col.forEach((doc, i) => {
    dataA.push({ ...doc.data(), docID: doc.id });
  });
  // console.log(data, "getAllInvoices");
  dispatch({
    type: GET_ALL_INVOICES,
    payload: dataA,
  });
};

export const getOneInvoice = (uid, id) => async (dispatch) => {
  const data = await USERS_DB.doc(uid).collection("invoices").doc(id).get();


  dispatch({
    type:GET_ONE_INVOICES,
    payload:data.data()
  });
};

export const updateInvoice = (uid,id,invoice) => async (dispatch) => {
  console.log(uid,id,invoice);
  // eslint-disable-next-line no-unused-vars
  const data = await USERS_DB.doc(uid).collection("invoices").doc(id).update(invoice);

  // console.log(uid,id,invoice);

  dispatch({
    type:GET_ONE_INVOICES,
    payload:invoice
  });


}


export const deleteInvoice = (uid,id) => async (dispatch) => {
  await USERS_DB.doc(uid).collection("invoices").doc(id).delete();
  dispatch({
    type:REMOVE_INVOICE,
    payload:null
  })
}


export const updateCurrentInvoice = (invoice) =>  (dispatch) => {
  dispatch({
    type:UPDATE_CURR_INVOICE,
    payload:invoice
  })
}