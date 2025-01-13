import React, { useState, version } from 'react'

const Square = ({ value,onSquareClick }) => {
    function handleClick() {
        setValue('X')
    }

    return (
        <>
            <button className='square' style={{ height: "50px", width: "50px", textAlign: "center", alignItems: "center" }} onClick={onSquareClick}>{value}</button>
        </>
    )
}

export default Square