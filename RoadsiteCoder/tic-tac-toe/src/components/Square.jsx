import React, { version } from 'react'

const Square = () => {

    function handleClick() {
        console.log('clicked')
    }

    return (
        <>
            <button className='square' onClick={handleClick}>1</button>
        </>
    )
}

export default Square