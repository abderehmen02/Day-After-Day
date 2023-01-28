import { Typography , Box} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header  = () => {
  return (
    <Box>
      <Typography variant='h3' color={(theme)=>theme.palette.secondary.light} textAlign='center' >Welcome To Day After Day</Typography>
      <Typography variant='h5' color={(theme)=>theme.palette.white.main} textAlign='center' >track your dailly ideas , goals and journalings</Typography>
    </Box>
    )
}