import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setInputValue } from '../../app/TodosInputFilter'

const TodosInputFilter = () => {
    const dispatch = useDispatch()
    const inputValue = useSelector((store) => store.todosInputFilter.inputValue)

    console.log(inputValue)

    const handleChange = (e) => {
        dispatch(setInputValue(e.target.value))
    }

  return (
    <div>
        <label htmlFor="todoInputFilter">Filter by title</label>
        <input type="text" name="" id="todoInputFilter" value={inputValue} onChange={handleChange} className='border-black border-[1px]'/>
    </div>
  )
}

export default TodosInputFilter