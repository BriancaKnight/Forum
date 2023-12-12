const reducer = (state = {}, action) => {
  const { text, author, upvotes, downvotes, id } = action;
  switch (action.type) {
    case 'ADD_NOTE':
      return Object.assign({}, state, {
        [id]: {
          text: text, 
          author: author, 
          upvotes: upvotes, 
          downvotes: downvotes,
          id: id
        }
      });
      case 'DELETE_NOTE':
        let newState = { ...state };
        delete newState[id];
        return newState;
      default: 
      return state;
  }
};


export default reducer;