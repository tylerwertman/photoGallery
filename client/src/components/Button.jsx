import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import axios from 'axios'

const Button = (props) => {
    const {count, setCount} = props
    const handleChange = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("photo", e.target.files[0])

        axios.post("http://localhost:8000/api/save", formData)
        .then((res)=>{
            console.log(res)
            setCount(count+1)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <label className='button' htmlFor="filePicker">
            <AiFillPlusCircle />
            <input hidden type="file" name="filePicker" id="filePicker" onChange={(e) => handleChange(e)} />
        </label>
    )
}

export default Button