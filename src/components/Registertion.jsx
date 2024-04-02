import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registertion = () => {
  return (
    <div  style={{marginTop:"80px"}}>
      <Typography variant='h3'>REGISTRATION</Typography><br></br><br></br>
      <TextField label="enter name" variant='outlined'/><br></br><br></br>
  <TextField label="enter password" type='password' variant='outlined'/><br></br><br></br>
<Button variant="contained" color="success">
  Success
</Button>
</div>
  )
}

export default Registertion