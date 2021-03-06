const BookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, { id: Math.random() * 2030, title: action.post.title }];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};

export default BookReducer;
