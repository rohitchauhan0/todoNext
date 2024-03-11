"use client"
import React, { useState } from 'react'

const Myinput = () => {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [mainTask, setmainTask] = useState([])
  const titleHandler = (event) => {
      settitle(event.target.value)
  }
  const descriptionHandler = (event) => {
      setdescription(event.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if(title!==""&&description!==""){
      setmainTask([...mainTask, { title, description }])
      setdescription("")
      settitle("")
    }
    else{
      alert("Please Enter the value")
    }
  }
  const deleteHandler = (index) =>{
      let copytask = [...mainTask ]
      copytask.splice(index,1)
      setmainTask(copytask)
  }
  let renderTask = <h2>No task available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((text, index) => {
      return <div key={index} className=' flex p-5 flex-col gap-3 items-center text-xl border-2 border-black justify-between rounded-md'>
        <h5 className=' font-bold text-2xl capitalize'>{text.title}</h5>
        <h6>{text.description}</h6>
        <button onClick={()=>{
          editHandler(index)
        }} className='  bg-black p-2 text-sm rounded-md text-white '>Edit</button>
        <button onClick={()=>{
          deleteHandler(index)
        }} className='  bg-black p-2 text-sm rounded-md text-white '>Remove</button>
      </div>
    })
  }
  return (
    <div >
      <form onSubmit={submitHandler} className=' full flex items-center justify-center flex-col gap-5 m-5' >
        <input value={title} onChange={titleHandler} type='text' placeholder='Enter your Title here' className=' w-[95%] lg:w-[450px] border-4 p-3 border-black rounded-md ' />
        <textarea value={description} onChange={descriptionHandler} type='text-area' placeholder='Enter your Task here' className=' w-[95%] lg:w-[450px] h-40  border-4 p-5 border-black rounded-md ' />
        <button type='submit' className=' bg-black p-4 rounded-md text-white'>Add Task!</button>
      </form>

      <hr />

      <div className='flex flex-row flex-wrap justify-center gap-3 py-4 '>
        {renderTask}
      </div>
    </div>
  )
}

export default Myinput