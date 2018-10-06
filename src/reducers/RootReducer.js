import forumReducer from "./ForumReducer";
import donationReducer from "./DonationReducer";

const rootReducer = (state = {}, action) => ({
    forum: forumReducer(state.forum, action),
    donation: donationReducer(state.donation, action)
  })
  
  export default rootReducer