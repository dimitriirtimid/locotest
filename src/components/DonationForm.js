import React from 'react'
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { closeDonationForm, updateDonationForm } from '../actions/DonationActions';
import { connect } from 'react-redux'

const DonationForm = ({active, onDonateClick, onCancelClick, onAmountClick, ...props}) => (
    <Dialog open={active}>
       <DialogTitle>Make a donation</DialogTitle>
       <DialogContent>
           <TextField
                autoFocus
                label='Amount'
                value={props.amount}
                onChange={onAmountClick}
                onKeyPress={props.onAmountKeyPress}
            />
       </DialogContent>
       <DialogActions>
           <Button onClick={onCancelClick}>Cancel</Button>
           <Button color='primary' onClick={onDonateClick}>Donate</Button>
       </DialogActions>
    </Dialog>

)



const mapStateToProps = state => {
    return {
        active: state.donation.donationFormActive,
        amount: state.donation.donationForm.amount
      }
}

const mapDispatchToProps = dispatch => {
    return {
      onDonateClick: () =>   dispatch(closeDonationForm()),
      onCancelClick: () =>   dispatch(closeDonationForm()),
      onAmountClick: (event) =>   dispatch(updateDonationForm({amount: event.target.value})),
      onAmountKeyPress: (event) => {
        if (event.key === 'Enter') {
            dispatch(closeDonationForm())
          }
      }
    }
}

const DonationFormContainer = connect(mapStateToProps, mapDispatchToProps)(DonationForm)

export default DonationFormContainer
