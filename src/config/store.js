import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import reducer from "../reducer"

const store=configureStore({reducer})
const getStore = () => {
    return store
}

export const useAppselector =useSelector
export const useAppDispatch =()=> useDispatch()
export default getStore