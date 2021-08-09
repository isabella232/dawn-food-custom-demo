export const selectCustomer = (value) => (dispatch) => {
    dispatch({
        type: 'SELECTCUSTOMER',
        payload : value
    })
}