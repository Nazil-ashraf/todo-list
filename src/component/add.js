import {addtodo} from "../reducer/todo-reducer";
import {useAppDispatch} from "../config/store";

export function Add({ids,setids,isstrike}){
    const dispatch=useAppDispatch()
    function handleadding(){
        dispatch(addtodo({ids,isstrike}))
        setids(ids+1)
    }
    return(
        <div onClick={handleadding} className={"todo--wrap--button"}>
            <div className={"todo--wrap--button--circle"}>+
            </div>
            <div className={"todo--wrap--button--text"}>NEW TASK</div>
        </div>
    )
}
export default Add