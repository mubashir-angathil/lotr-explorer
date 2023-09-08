import { configureStore } from '@reduxjs/toolkit'
import dataGridSlice from './reducers/dataGridSlice'
import dataGridActionSlice from './reducers/dataGridActionSlice'
import { previewModalSlice } from './reducers/generalSlice'

// Create and export the Redux store with combined reducers
export default configureStore({
  reducer: {
    dataGridSlice, // Reducer for data grid state
    dataGridActionSlice, // Reducer for filter state
    previewModalSlice // Reducer for preview modal state
  }
})
