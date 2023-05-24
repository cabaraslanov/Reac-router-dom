import { createContext, useReducer, useState } from "react";

export const context = createContext()

 const Provider = ({children})=>{

    const [login,setLogin] = useState(false);

    const submit = (e)=>{
        e.preventDefault();

        dispatch({
            type:"todos"
        })
    }

    const change = (e)=>{
        dispatch({type:"todo",input:e.target.value})
    }

     const reducer = (state,action)=>{

        switch(action.type){
            case "todo":
                return{
                    ...state,
                    todo:action.input
                }
            case "todos":
                return{
                    ...state,
                    todo:"",
                    todos:[...state.todos,state.todo]
                }
        }
    
    }
    
     const initialState = {
        todo:"",
        todos:[]
    }
    const [state,dispatch] = useReducer(reducer,initialState)

    const data = {
        reducer,
        initialState,
        submit,
        change,
        state,
        login,
        setLogin
    }

    return(
        <context.Provider value={data}>
            {children}
        </context.Provider>
    )
 }

 export default Provider;