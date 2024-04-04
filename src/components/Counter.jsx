import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[Count,setCount] =useState(0)
    const increment = ()=>
    {
        setCount(Count=Count+1)
    }
    const decrement = ()=>
    {
        if(Count>0)
        {
        setCount(Count=Count-1)
        }
        
    }
  return (
    <div>
        <Typography variant='h4'>{Count}</Typography>
        <Button variant='contained' color='success' onClick={increment}>+</Button>
        <Button variant='contained' color='error'onClick={decrement}>-</Button>
        </div>
  )
}

export default Counter
