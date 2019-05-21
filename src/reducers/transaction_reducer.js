const transactionReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [ ...state, action.value ]
    case 'CLEAR_LIST':
      return []
    default:
      return state
  }
}




export default transactionReducer;
