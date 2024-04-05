import { AppBar, Button, Table, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <AppBar>
      <Toolbar>
      <Typography variant='h4'>WELCOME</Typography>&nbsp; &nbsp;
      <Button variant='contained' color='error'> 
      <Link to={'/'} style={{textDecoration:'none', color:'white'}}>

View

</Link>
</Button>

&nbsp; &nbsp;
      <Button variant='contained' color='success'>
      <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>


           Add

           </Link>

           </Button>
      
      </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Navbar