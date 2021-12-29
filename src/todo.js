import "./todo.css"
import {useAppDispatch, useAppselector} from "./config/store";
import {useState} from "react";
import {addtodo, deletetodo, updateTodo} from "./reducer/todo-reducer";
import {CleanHandsOutlined, DeleteOutline} from "@mui/icons-material";
import Display from "./component/display";
import Add from "./component/add";


function Todo(){

    const [input,setinput]=useState({value:'',id:undefined})
    const [ids,setids]=useState(0)
    let isstrike=false;
    const todolist=useAppselector(state => state.todolist.todolist)
    // function readinput(event){
    //     setinput({value: event.target.value})
    //     dispatch(updateTodo(event.target.value))
    // }

    // function handleadding(){
    //     dispatch(addtodo({ids}))
    //     setids(ids+1)
    // }
    // function handledelete(item){
    //      dispatch(deletetodo(item))
    // }
    console.log(todolist)
    return(
        <div className={"todo"}>
            <div className={"todo--wrap"}>
                <div className={"todo--wrap--heading"}>TODO
                </div>
                <div className={"todo--wrap--content"}>

                    {todolist && todolist.map(item=>
                    //     <div className={"todo--wrap--content--detials"}>
                    //         <input type={"checkbox"} className={"todo--wrap--content--detials--checkbox"}/>
                    //         <input onChange={readinput}  className={"todo--wrap--content--details--input"} value={item.value} />
                    //         <DeleteOutline onClick={()=>handledelete(item.id)} className={"todo--wrap--content--details--delete"}/>
                    //
                    // </div>
                        <Display item={item} setinput={setinput} input={input} isstrike={isstrike}/>
                    )}

                </div>
                {/*<div onClick={handleadding} className={"todo--wrap--button"}>*/}
                {/*    <div className={"todo--wrap--button--circle"}>+*/}
                {/*    </div>*/}
                {/*    <div className={"todo--wrap--button--text"}>NEW TASK</div>*/}
                {/*</div>*/}
                <Add ids={ids} setids={setids} isstrike={isstrike}/>
            </div>
        </div>
    )
}export default Todo
