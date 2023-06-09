import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Grid = (props) => {
    const {count} = props
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/get')
            .then((res) => {
                setPhotos(res.data)
            })
            .catch((err) => console.log("err", err))
    }, [count])
    return (
        <div>
            <h1>Our Gallery</h1>
            <div className="grid">
                {photos.map(({ photo, _id }) => {
                    return (
                        <div key={_id} className="gridItem" >
                            <p>{photo}</p>
                            <img src={`http://localhost:8000/uploads/${photo}`} alt="" />
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Grid