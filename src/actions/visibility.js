export const searchVisible = (value) => (dispatch) => {
    dispatch({
        type: 'SEARCHVISIBLE',
        payload: value
    })
}
export const federatedSearchVisible = (value) => (dispatch) => {
    dispatch({
        type: 'FEDERATEDSEARCH_VISIBLE',
        payload: value
    })
}
export const ourProducts = (value) => (dispatch) => {
    dispatch({
        type: 'OUR_PRODUCTS',
        payload: value
        
    })
}
export const catTwo = (value) => (dispatch) => {
    dispatch({
        type: 'CAT_TWO',
        payload: value
    })
}
export const homepage = (value) => (dispatch) => {
    dispatch({
        type: 'HOMEPAGE',
        payload: value
    })
}