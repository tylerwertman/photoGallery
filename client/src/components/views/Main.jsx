import React from 'react'
import Grid from '../Grid'
import Button from '../Button'

const Main = (props) => {
    const {setLoggedIn, count, setCount, cookieValue} = props
    return (
        <div>
            <Grid setLoggedIn={setLoggedIn} count={count} setCount={setCount}/>
            <Button setLoggedIn={setLoggedIn} count={count} setCount={setCount} cookieValue={cookieValue}/>
        </div>
    )
}

export default Main