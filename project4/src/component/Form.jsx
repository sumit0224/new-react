import { useEffect, useState } from "react"




const Form = () => {
    const [todo, setTodo] = useState(() => {
        const data = localStorage.getItem("todo")
        return data ? JSON.parse(data) : []
    })
    const [formData, setFormData] = useState({ title: "", description: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        const updateTodo = [ formData, ...todo]
        setTodo(updateTodo)
        
        setFormData({ title: "", description: "" })
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])



    return (
        <div className=" w-100 flex items-center justify-center min-h-screen">

            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    TODO APP
                </h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                    <div className="flex flex-col">
                        <label htmlFor="title" className="text-sm font-semibold text-gray-700">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            value={formData.title}
                            type="text"
                            onChange={handleChange}
                            placeholder="Enter your title"
                            className="mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-sm font-semibold text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            onChange={handleChange}
                            value={formData.description}
                            placeholder="Enter your description"
                            className="mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows="4"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        ADD TASK
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Form