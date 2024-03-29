import React from 'react'
import Home from './pages/Home'
import { Box, Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { appStyles } from './Style.js'
import { SnackbarProvider, closeSnackbar } from 'notistack'

// The App component serves as the root component of the application.
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* // Snackbar configuration */}
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={4000}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            action={(snackbarId) => (
                <Button
                    color='inherit'
                    onClick={() => closeSnackbar(snackbarId)}
                    title='close'
                    size='small'
                >
                    Close
                </Button>
            )}
        >
            <Box sx={appStyles.container}>
                <Home /> {/* Render the Home component within a Box */}
            </Box>
        </SnackbarProvider>
    </ThemeProvider>
)

export default App
