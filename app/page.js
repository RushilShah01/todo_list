"use client"
import { Main } from 'next/document'
import React, { useState } from 'react'
const page = () => {
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [MainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...MainTask, { Title, Desc }])
    setTitle("")
    setDesc("")
  }

  const deleteHandler=(i)=>{
    let copyTask=[...MainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No task available</h2>

  if (MainTask.length > 0) {
    renderTask = MainTask.map((t, i) => {
      return <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.Title}</h5>
          <h6 className='text-lg font-medium'>{t.Desc}</h6>
        </div>
        <button onClick={()=>{
          deleteHandler(i)
        }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My ToDo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 ' placeholder='Enter title here' value={Title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 ' placeholder='Enter description here' value={Desc} onChange={(e) => {
          setDesc(e.target.value)
        }} />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page