let forumItemCount = 0
// export const addForumItem = text => ({
//   type: 'ADD_FORUM_ITEM',
//   id: forumItemCount++
// })

export function addForumItem(text) {
  return function (dispatch, getState) {
    return fetch('http://localhost:8088/posts', {
        method: 'POST',
        body: JSON.stringify({id:16, text: getState().forum.editItem}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .catch(error => dispatch(signalError(error)))
      .then(json => dispatch(fetchForumItems()));
  };
}

export const editForumItem = text => ({
  type: 'EDIT_FORUM_ITEM',
  text
})

export const receiveForumItems = items => {
       console.log('receiving...' + JSON.stringify(items))

  return ({
  type: 'RECEIVE_FORUM_ITEMS',
  items
})
}

export const signalError = error => ({
  type: 'SIGNAL_ERROR',
  error
})

export function fetchForumItems() {
  return function (dispatch) {
    return fetch('http://localhost:8088/posts').then(
      response => response.json().then(json => dispatch(receiveForumItems(json))),
      error => dispatch(signalError(error))
    );
  };
}