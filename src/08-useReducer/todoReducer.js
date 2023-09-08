export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case '[TODO] Add todo':
      return [...state, action.payload];
    case '[TODO] Remove Todo':
      return state.filter((todo) => todo.id !== action.payload);
    case '[TODO] Toogle Todo':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
