import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'

// Redux imports
import { Provider } from 'react-redux'
import store from './utils/helpers/contexts/redux/store.js'

// Function to render the React application
const renderApp = () => {
  // Get the HTML element with the id 'root' where the React app will be rendered
  const container = document.getElementById('root')

  // Create a root React element using createRoot
  const root = createRoot(container)

  // Render the React app wrapped in a Redux Provider
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

// Render the app initially
renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Measure and report web vitals for performance monitoring
reportWebVitals()
