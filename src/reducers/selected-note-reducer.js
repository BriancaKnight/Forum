const reducer = (state = {}, action) => {
  const { text, author, upvotes, downvotes, id } = action;
  switch (action.type) {
    case 'SELECT_NOTE':
      return ({}, state, {
        [id]: {
          text: text,
          author: author,
          upvotes: upvotes,
          downvote: downvotes,
          id: id
        }
      });
  }
  return state;
};

export default reducer;