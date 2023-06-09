import React from 'react'

const Grid = ({photos}) => {
    return (
        <div>
            <h1>Our Gallery</h1>
            <div className="grid">
                {photos.map(({ photo, _id })=>{
                    return(
                    <div key={_id} className="gridItem" >
                        <p>{photo}</p>
                        <img src={`http://localhost:8000/uploads/${photo}`} alt=""/>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Grid