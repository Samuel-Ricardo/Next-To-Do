import Router from "next/router"
import { useState } from "react"

export const CreateToDo = () => {

  const [description, setDescription] = useState("")

  const handleClick = async () => {
    await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({description})
    }).then(() => Router.reload())
  }

  return (
    <form className="flex justify-center mt-10">
      
      <div className="bg-gray-50 p-8 rounded-lg">
        
        <h1 className="text-center mb-4">
          Write To Do List
        </h1>

        <div className="flex space-x-2 p-2 bg-white rounded-md">
          <input
            value={description}
            onChange={event => setDescription(event.currentTarget.value)}
            type="text"
            placeholder="Write here..."
            className="w-full outline-none"
          />
          <button
            className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold"
            onClick={() => handleClick()}
          >
            Send
          </button>
        </div>

      </div>
    
    </form>
  )
}
