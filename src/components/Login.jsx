import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"80px"}}>
        <Typography variant='h2'>LOGIN PAGE</Typography><br /><br />
        <TextField label="enter name" variant='outlined'/><br /><br />
        <TextField label="enter password" type='password' variant='outlined'/><br /><br />
        <Button variant="contained" color="success">
  Login
</Button>
    </div>
  )
}

export default Login