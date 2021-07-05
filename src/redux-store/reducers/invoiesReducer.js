import { ADD_INVOICE,GET_ALL_INVOICES, GET_ONE_INVOICES,UPDATE_INVOICE, REMOVE_INVOICE,UPDATE_CURR_INVOICE } from "../actions/Types";

const initialState = {
  invoices: [],
  currentInvoice:null
};

const invoiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };

    case GET_ALL_INVOICES:
        return {
            ...state,
            invoices:action.payload
        }

    case GET_ONE_INVOICES:
      return {
        ...state,
        currentInvoice:action.payload
      }

    case UPDATE_INVOICE:
      return {
        ...state,
      }
    
    case REMOVE_INVOICE:
      return {
        ...state,
        currentInvoice:null
      }

    case UPDATE_CURR_INVOICE:
      return {
        ...state,
        currentInvoice:action.payload
      }

    default:
      return state;
  }
};

export default invoiesReducer;
