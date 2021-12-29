import './display.css'
import {DeleteOutline} from "@mui/icons-material";
import {deletetodo, handleStrike, updateTodo} from "../reducer/todo-reducer";
import {useAppDispatch, useAppselector} from "../config/store";

export function Display({item,setinput,isstrike}){
    const todolist=useAppselector(state => state.todolist.todolist)
    const dispatch=useAppDispatch()
    function readinput(id,event){
        setinput({value: event.target.value})
        dispatch(updateTodo({value:event.target.value,id:id,isstrike:isstrike}))
    }
    function handledelete(item){
        dispatch(deletetodo(item))
    }
   function handlecheckbox(item){
        dispatch(handleStrike(item))
   }
    return(
        <div className={"todo--wrap--content--detials"}>
            <input onChange={()=>handlecheckbox(item.id)} type={"checkbox"} className={"todo--wrap--content--detials--checkbox"}/>
            <input onChange={(event)=>readinput(item.id,event)}  className={"todo--wrap--content--details--input"} value={item.value} />
            <DeleteOutline onClick={()=>handledelete(item.id)} className={"todo--wrap--content--details--delete"}/>

        </div>
    )
}
export default Display