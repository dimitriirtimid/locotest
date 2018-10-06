import { addForumItem, editForumItem } from '../actions/forumActions'
import { connect } from 'react-redux'
import AddItemButton from '../components/AddItemButton'

const mapStateToProps = state => ({
    text: state.forum.editItem,
    dim: "hjallo"
})

const mapDispatchToProps = (dispatch, props) => ({
      onAddClick: () => {
        alert(JSON.stringify(props))
        dispatch(addForumItem(props.text))
      },

      onTextChange: event => dispatch(editForumItem(event.target.value)),
      onTextKeyPress: event => event.key === 'Enter' && dispatch(addForumItem())
  })

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItemButton)

export default AddItemContainer
