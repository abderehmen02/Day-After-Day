import { Typography , Box} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { stateType } from '../../state/reducers'
import WarningIcon from '@mui/icons-material/Warning';


export const Header  = () => {
  const loginState = useSelector((state : stateType )=> state.userLogin )

  return (
    <Box>
      <Typography variant='h3' color={(theme)=>theme.palette.secondary.light} textAlign='center' >Welcome To Day After Day</Typography>
      <Typography variant='h5' color={(theme)=>theme.palette.white.main} textAlign='center' >track your dailly ideas , goals and journalings</Typography>
      <Box margin="24px" display="flex" alignItems="center" justifyContent="center"  >{loginState.error?.length && loginState.error !== 'please provide and email and password' && loginState.error !== 'password incorrect' && loginState.error !== 'can not find user' ? <Typography fontWeight="bold" textTransform="capitalize" color="secondary.main" textAlign="center" variant="h4" ><WarningIcon/>     {loginState.error} </Typography> : ""}</Box>
    </Box>
    )
}