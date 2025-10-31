import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[
        {id:1,title:"Learn React",completed:true,},
        {id:2,title:"Learn Ethical Hacking",completed:false,},
        {id:3,title:"Do Full Body Exercise",completed:false,},
    ]
}

export const todosSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        
        addNewItem: (state,action) =>{
            state.items.push(action.payload)
        }
    },
})

export const {addNewItem} = todosSlice.actions;
export default todosSlice.reducer;