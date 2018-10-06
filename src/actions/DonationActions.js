
export const openDonationForm = () => ({
  type: 'OPEN_DONATION_FORM'
})

export const closeDonationForm = () => ({
  type: 'CANCEL_DONATION_FORM'
})

export const updateDonationForm = (form) => ({
    type: 'UPDATE_DONATION_FORM',
    form
  })

  