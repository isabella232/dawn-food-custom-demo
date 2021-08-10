const initState = {
  customer: null,
  nameCustomer: "",
};

const selectCustomer = (state = initState, action) => {
  switch (action.type) {
    case "SELECTCUSTOMER":
      return {
        ...state,
        customer: action.payload,
      };
    case "NAMECUSTOMER":
      return {
        ...state,
        nameCustomer: action.payload,
      };
    default:
      return { ...state };
  }
};

export default selectCustomer;
