import React from 'react';
import AddNewInvoiceContext from './AddNewInvoiceContext';

const AddNewInvoiceRef = (props) => {
    const addInvoiceRef = React.useRef(null);
    return (
        <AddNewInvoiceContext.Provider value={addInvoiceRef}>
            {props.children}
        </AddNewInvoiceContext.Provider>
    );
}

export default AddNewInvoiceRef;
