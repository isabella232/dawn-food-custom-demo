export const selectCustomer = (value) => (dispatch) => {
    dispatch({
        type: 'SELECTCUSTOMER',
        payload : value
    })
}

export const nameCustomer = (value) => (dispatch) => {
    dispatch({
        type: 'NAMECUSTOMER',
        payload: value
    })
}