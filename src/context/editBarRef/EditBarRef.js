import React from 'react';
import EditBarContext from './EditBarContext';
import EditBarReducer from './EditBarReducer';

const EditBarRef = (props) => {
    const INIT_STATE = {invoice:null,id:null}
    // eslint-disable-next-line no-unused-vars
    const [state,dispatch] = React.useReducer(EditBarReducer,INIT_STATE);

    const addInvoice = (invoice) => {
        dispatch({
            type:'add',
            payload:invoice
        });
    }

    const putID = (docID) => {
        dispatch({
            type:'docID',
            payload:docID
        })
    }

    const editBarRef = React.useRef(null);
    return (
        <EditBarContext.Provider value={{editBarRef,addInvoice,putID,state}}>
            {props.children}
        </EditBarContext.Provider>
    );
}

export default EditBarRef;
