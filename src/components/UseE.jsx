import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [name,setNmae] =useState()
    const changeHname =()=>{
        setNmae(" Home")
    }
    const changeGname =()=>{
        setNmae(" GALLERY")
    }
    const changeCname =()=>{
        setNmae(" Contact")
    }
    useEffect(()=>{
        changeCname()
    },[])
  return (
    <div>
        <Typography variant='h5'>welcome to{name}</Typography>
        <Button variant='contained' color='error' onClick={changeHname}>Home</Button>
        <Button variant='contained' color='success' onClick={changeGname}>gallery</Button> 
        <Button variant='contained' color='warning' onClick={changeCname}>contact</Button>   
    </div>
  )
}

export default UseE