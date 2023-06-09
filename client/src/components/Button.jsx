import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import axios from 'axios'
import jwtdecode from 'jwt-decode'


const Button = (props) => {
    const { count, setCount, cookieValue } = props
    console.log(jwtdecode(cookieValue).displayName)
    const handleChange = (e) => {
        e.preventDefault()
        const formData = new FormData()
        const filename = jwtdecode(cookieValue).displayName + '-' + Date.now() + '-' + e.target.files[0].name;
        formData.append("photo", e.target.files[0], filename);

        axios.post("http://localhost:8000/api/save", formData)
            .then((res) => {
                console.log(res)
                setCount(count + 1)
                console.log(formData)
            })
            .catch((err) => console.log(err))
    }
    return (
        <label className='button' htmlFor="filePicker">
            <AiFillPlusCircle />
            <input hidden type="file" name="filePicker" id="filePicker" onChange={(e) => handleChange(e)} />
        </label>
    )
}

export default Button