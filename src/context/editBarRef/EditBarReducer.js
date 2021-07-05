const EditBarReducer = (state,action) => {
    switch (action.type) {
        case 'add':
           return{
            ...state,
            invoice:action.payload
           }

        case 'docID':
            return {
                ...state,
                docID:action.payload
            }
    
        default:
           return state;
    }
}

export default EditBarReducer;
