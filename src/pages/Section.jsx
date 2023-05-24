import React from 'react'
import Form from '../components/Form'
import Todo from '../components/Todo'
import Todos from '../components/Todos'


const Section = () => {
  return (
    <div className='section'>
        <Form/>
        <Todo/>
        <Todos/>

    </div>
  )
}

export default Section