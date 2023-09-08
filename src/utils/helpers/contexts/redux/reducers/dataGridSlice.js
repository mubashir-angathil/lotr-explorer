import { createSlice } from '@reduxjs/toolkit'

// Define a Redux slice named 'dataGridDetails' with initial state
export const dataGridSlice = createSlice({
  name: 'dataGridDetails', // The name of the slice
  initialState: {
    details: {
      rowData: [], // An array to hold row data
      limit: 10, // The number of rows per page
      page: 0, // The current page
      pages: 0, // The total number of pages
      total: 0, // The total number of data rows
      offset: 0, // An offset for pagination
      loading: false // A flag to indicate if data is loading
    }
  },
  reducers: {
    // Reducer function to update the data grid details
    updateDataGridDetails: (state, action) => {
      const { limit, page, pages, loading = false, docs, total, offset } = action.payload
      state.details.limit = limit
      state.details.page = page
      state.details.pages = pages
      state.details.rowData = docs
      state.details.total = total
      state.details.offset = offset
      state.details.loading = loading
    },

    // Reducer function to update the row data
    updateRowData: (state, action) => {
      state.details.rowData = action.payload
    },

    // Reducer function to update the current page
    updatePage: (state, action) => {
      state.details.page = action.payload
    },

    // Reducer function to update the number of rows per page
    updateLimit: (state, action) => {
      state.details.limit = action.payload
    },

    // Reducer function to set the loading flag
    setLoading: (state, action) => {
      state.details.loading = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  updateDataGridDetails,
  updateRowData,
  updatePage,
  updateLimit,
  setLoading
} = dataGridSlice.actions

export default dataGridSlice.reducer
