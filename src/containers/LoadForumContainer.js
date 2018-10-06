import { fetchForumItems } from '../actions/forumActions'
import { connect } from 'react-redux'
import LoadButton from '../components/LoadButton'

const mapDispatchToProps = dispatch => {
    return {
      onLoadClick: () => {
        dispatch(fetchForumItems())
      }
    }
  }

const LoadForumContainer = connect(state => {}, mapDispatchToProps)(LoadButton)

export default LoadForumContainer
