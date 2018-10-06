import React from 'react'
import { Button } from '@material-ui/core';
import { openDonationForm } from '../actions/DonationActions';
import { connect } from 'react-redux'

const OpenDonationFormButton = ({onClick}) => (
    <Button variant="raised" color="primary" onClick={onClick}>Donate</Button>
)



const mapStateToProps = state => {
    return {
      }
}

const mapDispatchToProps = dispatch => {
    return {
      onClick: () =>   dispatch(openDonationForm())
    }
}

const OpenDonationFormButtonContainer = connect(mapStateToProps, mapDispatchToProps)(OpenDonationFormButton)

export default OpenDonationFormButtonContainer