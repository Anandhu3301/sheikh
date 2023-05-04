import { Button, Stack, TextField, useFormControl } from '@mui/material'
import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
const Add = () => {
    const{register,handleSubmit} = useForm();
    const getval=(val)=>{
          alert('Form submitted');
          axios.post('https://reqres.in/api/users',val).then((res)=>{
            alert(`The data is posted with id  ${res.data.id}`)
          })
    }
  return (
    <div>
 
 
    <Stack
    component="form"
    sx={{
      width:'25ch',
      marginTop:'70px',
      marginLeft:'550px'
    }}
    spacing={2}
    noValidate
    autoComplete="off"
  >
    <TextField
    name='empnam'
    {...register('empnam')}
      hiddenLabel
      id="filled-hidden-label-small"
      label="Employeename"
      variant="filled"
      
    />
    <TextField
   {...register('empfile')}
    name='empfile'
      hiddenLabel
      id="filled-hidden-label-normal"
      label="Employeelocation"
      variant="filled"
    />
    <TextField
    {...register('empdes')}
    name='empdes'
      hiddenLabel
      id="filled-hidden-label-normal"
      label="EmployeeSalary"
      variant="filled"
    />
    <Button variant='contained' onClick={handleSubmit(getval)} >Submit</Button>
  </Stack>

    </div>
  )
}

export default Add
