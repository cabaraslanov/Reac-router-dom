import React, { useContext } from 'react';
import { context } from '../context/SectionContext';

const Form = () => {
    const {submit,change,state} = useContext(context)
  return (
    <>
        <form onSubmit={submit}>
            <input value={state.todo} onChange={change} type='text'/>
            <button>Add</button>
        </form>
        
    </>
  )
}

export default Form