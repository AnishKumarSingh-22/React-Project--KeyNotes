
import './App.css'
import Header from './myContainer/header';
import { Footer } from './myContainer/footer';
import{Todos} from './myContainer/todos';
import { TodoItem } from './myContainer/todoItem';
import { Addtodo } from './myContainer/addtodo';
import React, { useState, useEffect } from 'react';
import { About } from './myContainer/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null ){
    initTodo = []
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const  Delete = (todo) =>{
  
    setTodos(todos.filter((ele) => { 
     return ele!==todo
    }))
    localStorage.getItem("todos")
 }
 const AddTodo = (title, desc) => {
  console.log("I am adding this todo",title,desc)
  let sno;
  if(todos.length===0){
    sno=1;
  }
  else{
      sno=todos[todos.length-1].sno + 1;
  }
  const myTodo={
    sno: sno,
    title:title,
    desc: desc,
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo)

 }
  
 const[todos,setTodos]=useState(initTodo);
 useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));

}, [todos]) 
 
  return (
    <Router>
      <>
        <Header title="My TodoList" searchBar={true}/>
        
        <Routes>
          <Route path="/" element={

              <>
                <Addtodo addTodo={AddTodo} />
                <Todos list1={todos} onDelete={Delete}/>
                </>
        
          }/>


          <Route path="/about" element={<About/>}/>

        </Routes>  
           
      
        <Footer/>
      </>
    </Router>
    
  );  
}

export default App;
