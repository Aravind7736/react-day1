import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Statebasics = () => {
    /*var fname="Aravind"*/
    var[name,setName] =useState("Aravind")
    var[value,setValue] = useState()

    const changeName =()=>{
        console.log("clicked")
        setName("ARAVIND")
        setName(value)
    }
    const inputHandler =(e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }
  return (
    <div>
        <Typography variant='h4'>welcome {name}</Typography>
        <TextField label="enter name" placeholder='name' onChange={inputHandler}></TextField><br></br>
        <Button variant='contained' color='error' onClick={changeName}>Change</Button><br></br>
        
    </div>
  )
}

export default Statebasics