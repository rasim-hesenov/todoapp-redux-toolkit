import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn Ethical Hacking", completed: false },
    { id: 3, title: "Do Full Body Exercise", completed: false },
  ],
  activeFilter: "all",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.items.push(action.payload);
    },

    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },

    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },

    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },

    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
  },
});



export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => state.todos.activeFilter;

export const selectFilteredTodos = (state) =>{
    if(state.todos.activeFilter === "all"){
      return state.todos.items;
    }
    return state.todos.items.filter((item) =>
      state.todos.activeFilter === "active"
        ? item.completed === false
        : item.completed === true
    );
}



export const {
  addNewItem,
  toggle,
  destroy,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
