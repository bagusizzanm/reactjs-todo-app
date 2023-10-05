import React, {useState} from 'react';
import TodoForm from "./TodoForm"
import TodoList from "./TodoList";


const todos = [
   { id: "01", text: "Read a book" },
   { id: "02", text: "Have lunch" },
   { id: "03", text: "Playing games" }
]
const MyApp = () => {
   const [todoList, setTodoList] = useState(todos)
   const [color, setColor] = useState(null)
   const [message, setMessage] = useState(null)

   const handleDeleteClick = (e) => {
      const newTodos = todoList.filter(
         item => item.id !== e.target.id
      )
      setTodoList(newTodos)

      showMessage("Todo has been successfully removed !", "success")
   }

   const handleAddTodo = (text) => {
      const newTodos = [
         ...todoList,{
            id: new Date().getTime().toString(),
            text: text
         }
      ]
      setTodoList(newTodos)
      showMessage("Todo has been successfully added !", "success")
   }

   const showMessage = (text, messageColor) => {
      setMessage(text);
      setColor(messageColor);
      setTimeout(() => {
         setMessage(null);
      }, 5000);
   };


   return(
      <div>
         <h2 className="title">Todo App</h2>
         <div className="container">
            {message && <small className={`${color} show`}>{message}</small>}
            <h2 className="text">What do u wanna do?</h2>

            <TodoForm onAddTodo={handleAddTodo} onShowMessage={showMessage}/>

            {
               todoList.length > 0 ?
               todoList.map((todo) => (
                  <TodoList key={todo.id} id={todo.id} text={todo.text} onTodoClick={handleDeleteClick}
                  />
               )) :
               ( <p style={{color: "gray", textAlign: "center"}}>Nothing's to do yet . . . </p>)
            }
         </div>
      </div>
   )
}

export default MyApp;