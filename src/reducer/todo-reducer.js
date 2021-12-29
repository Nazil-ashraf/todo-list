import {createSlice} from "@reduxjs/toolkit";

const initialstate={
    todolist:[],


}
export const todoslice=createSlice({
    name:'todo',
    initialState:initialstate,
    reducers:{
     addtodo(state,action){

      return {...state,todolist:[...state.todolist,{id:action.payload.ids,isstrike:action.payload.isstrike}]}

     },

      updateTodo(state,action) {
          const updatedlist = updates([...state.todolist], action.payload)
          return {...state, todolist: updatedlist}
      },
       handleStrike(state,action){
          const objIndex = state.todolist.findIndex((obj => obj.id == action.payload));
           if(state.todolist[objIndex].isstrike==false){
               state.todolist[objIndex].isstrike=true
           }else{
               state.todolist[objIndex].isstrike=false
           }


          },
        deletetodo(state,action){
            // return{...state,todolist: state.todolist.filter(item => item.id !== action.payload)}
            const delteitem= state.todolist.filter((item) => item.id !== action.payload)
            return {...state,todolist: delteitem}

        },

// {value:action.payload.input.value
}})
//
function updates(list,todo){
 const index=list.indexOf(todo)
  list.splice(index,1,todo)
    return list
}


export const {addtodo,deletetodo,updateTodo,handleStrike}=todoslice.actions
export default todoslice.reducer