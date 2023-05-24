import React, { useContext } from 'react'
import { context } from '../context/SectionContext'
import Todo from './Todo'

const Todos = () => {

    const {state} = useContext(context)

  return (
   
        
            <ul>
                {
                    state.todos?.map((todo,index)=>(
                        <Todo key={index} todo={todo}/>
                ))
                }
            </ul>
        
  )
}

export default Todos