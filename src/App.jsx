import React from 'react'
import Home from './pages/Home'
import { Box } from '@mui/material'
import { appStyles } from './style.js'

// The App component serves as the root component of the application.
const App = () => (
    <Box sx={appStyles.container}>
        <Home /> {/* Render the Home component within a Box */}
    </Box>
)

export default App
