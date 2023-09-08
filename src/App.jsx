import React from 'react'
import Home from './pages/Home'
import { Box } from '@mui/material'
import { appStyles } from './style.js'

const App = () => (
<Box sx={appStyles.container}>
<Home/>
</Box>
)

export default App
