
const initState = {
    searchVisible: null,
    federatedSearchVisible: false,
    catOne : false,
    ourProducts: false,
    homepage: true
}

 const visibility  = (state = initState, action) => {
switch(action.type){
    case 'SEARCHVISIBLE':
        return {
            ...state,
            searchVisible: action.payload
        };
    case 'FEDERATEDSEARCH_VISIBLE':
            return {
                ...state,
                federatedSearchVisible: action.payload
            };
    case 'OUR_PRODUCTS':
            return {
                ...state,
                ourProducts: action.payload
            };
    case 'CAT_TWO':
            return {
                ...state,
                catTwo: action.payload
            };
            case 'HOMEPAGE':
                return {
                    ...state,
                    homepage: action.payload
                };
        default:
      return { ...state };

    
}
}

export default visibility