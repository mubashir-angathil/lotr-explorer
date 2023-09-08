import React from 'react'
import HeaderComponent from '../components/header/HeaderComponent'
import DataGridComponent from '../components/data-grid/DataGridComponent'

// The Home component serves as a container for rendering the header and data grid components.
const Home = () => {
  return (
    <React.Fragment>
        <HeaderComponent/> {/* Render the header component */}
        <DataGridComponent/> {/* Render the data grid component */}
    </React.Fragment>
  )
}

export default Home
