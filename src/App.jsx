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
      <Person></Person>
      <Person></Person>
      <Person></Person>
 
     
    </>
  )
}
function Person(){
  const age=30;
  const family=2;
  const job=2;
  const home="yes";
  
  
  return(
    <>
    <h1>ismam:{name} with age:{age}</h1>
    <h1>family:{family}</h1>
    <h1>job:{job}</h1>
    <h1>home:{home}</h1>
    </>
  )
}
function Developer(){
  return(
    <div>
      <h1>dev</h1>
    </div>
  )
}

export default App
