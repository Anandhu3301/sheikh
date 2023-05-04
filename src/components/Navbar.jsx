import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'
const Navbar = () => {
  return (
    <div>
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Employee
          </Typography>
          <Button color="success" variant='contained' >
          <Link to={'/'} >Home</Link>
          </Button>
          &nbsp;
          <Button color="error" variant='contained'> <Link to={'/add'}>Add Employee</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
