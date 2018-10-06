const initialState = {
  items: []
}

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FORUM_ITEM':
        return {
            ...state, 
            items: [
                    ...state.items,
                    {
                        id: action.id,
                        text: state.editItem
                    }
                    ],
            editItem: ''
        }
      case 'RECEIVE_FORUM_ITEMS':
        return {
          ...state,
          items: action.items
        }
      case 'EDIT_FORUM_ITEM':
        return {
          ...state,
          editItem: action.text
        }
       default:
        return state
    }
  }
  
  export default forumReducer