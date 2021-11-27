import React from 'react'
import Store from "./Store"

function Main() {
    const nums = Store((state) => state.num)
    return (
        <div>
            <h1>{nums}</h1>
        </div>
    )
}

export default Main
