import { Box, Typography } from '@mui/material'
import React from 'react'
import headerStyle from './style'

const HeaderComponent = () => {
  // Define the data for the title and subtitle
  const data = {
    title: 'The load of the rings API',
    subtitle: 'The one API to rule them all'
  }

  return (
    // Container with flex layout to center content vertically
    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' pt={5}>
      {/* Title Typography component */}
      <Typography variant='h4' sx={headerStyle.title}>{data.title}</Typography>
      {/* Subtitle Typography component */}
      <Typography variant='h6' sx={headerStyle.subtitle}>{data.subtitle}</Typography>
    </Box>
  )
}

export default HeaderComponent
