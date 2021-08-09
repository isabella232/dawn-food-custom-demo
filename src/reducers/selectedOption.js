const initState = {
    customer : null
}

const selectCustomer  = (state = initState, action) => {
switch(action.type){
    case 'SELECTCUSTOMER':
        return {
            ...state,
            customer: action.payload
        }
        default:
      return { ...state };

    
}
}

export default selectCustomer