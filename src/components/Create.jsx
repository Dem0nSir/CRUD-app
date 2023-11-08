import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {v4 as uuid} from 'uuid'



const Create = () => {
    const[user,setUser]=useState({
        id: uuid(),
        name: "",
        email: "",
        image: ""
    })
    const navigate = useNavigate();
    const handleInput =(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3030/users",user)
        .then(result => {
            navigate("/")
            console.log(result)
        })
        .catch(err=>console.log(err))

    }
  return (
    <div className="d-flex justify-content-center w-100 align-item-center">
        <div className="w-50 border mt-5 rounded bg-secondary text-white p-5">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={handleInput}/>
                </div>
                <div >
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" className="form-control" placeholder="Enter Image Url" onChange={handleInput}/>
                </div>
                <button className="btn btn-info mt-1">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create