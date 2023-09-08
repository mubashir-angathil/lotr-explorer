import { Box, Typography } from '@mui/material'
import React from 'react'
import headerStyle from './style'

const HeaderComponent = () => {
  const data = {
    title: 'The load of the rings API',
    subtitle: 'The one API to rule them all'
  }
  return (
    <Box display='flex' alignItems='center' flexDirection='column' pt={5}>
        <Typography variant='h4' sx={headerStyle.title}>{data.title}</Typography>
        <Typography variant='h6' sx={headerStyle.subtitle}>{data.subtitle}</Typography>
    </Box>
  )
}

export default HeaderComponent
