import { use } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
    let myObj={
        username:"Tom",
        age:21
    } 
    let newArr=[1,2,3];
  return (
    <>
      <h1 className="bg-teal-400 text-black p-4 rounded-xl">
        Tailwind Test
      </h1>
      <Card userName="Shoaib"  />
      <Card userName="Khan"  />

    </>
  )
}

export default App