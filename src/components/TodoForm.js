import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({onAddTodo, onShowMessage}) => {
   const [inputTodo, setInputTodo] = useState("")

   const handleInputChange = (e) => {
      setInputTodo(e.target.value)
   }

   const handleFormSubmit = (e) => {
      e.preventDefault()
      if (inputTodo.trim() === ""){
         onShowMessage("Todo shouldn't be empty !", "deleted")
      }else{
         onAddTodo(inputTodo)
         setInputTodo("")
      }
   }

   return(
      <>
         {/* {message && <small className={`${color} show`}>{message}</small>} */}
         <form onSubmit={handleFormSubmit}>
            <div>
               <input type="text" placeholder="Add todo ..." value={inputTodo} onChange={handleInputChange}/>
               <button onClick={handleFormSubmit}>
                  <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
               </button>
            </div>
         </form>
      </>
   )
}

export default TodoForm