const initialState = {
  donations: [],
  donationFormActive:false, 
  donationForm: {
    amount: 17,
    condition: 'AmountReached'
  }
}

const donationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_DONATION_FORM':
        return {...state, donationFormActive: true}
      case 'CANCEL_DONATION_FORM':
        return {...state, donationFormActive: false}
      case 'UPDATE_DONATION_FORM':
        const newForm = {...state.donationForm, ...action.form}
        return {...state, donationForm: newForm}
      default:
        return state
    }
  }
  
  export default donationReducer