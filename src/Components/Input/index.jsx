import React, {useState} from 'react'

const Input = () => {

    const [nombre , setNombre] = useState("")

    const handaleInputChange = (event) => {
        setNombre(event.target.value)
    }


    return(
        <>
        <input onChange={handaleInputChange} type="text" />
        <span> nombre:{nombre} </span>
        </>
    )
}

export default Input