import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      
    
      
      
    </>
  )
}
function Person(){
  const age = 27;
  const money=30;
const person={name:"Sakib",age:30}


return <h4>i am {person.name} with age:{age+money}</h4>



  
}
function Student(){
   
  return(
    <div>
<h1>this is a student</h1>
<p>name:</p>
<p>age:</p>
    </div>
  )
}

export default App
