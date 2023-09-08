import { createSlice } from '@reduxjs/toolkit'

// Define the initial state for the data grid
const initialState = {
  search: undefined,
  sort: undefined,
  races: [],
  gender: undefined
}

// Create a Redux slice called 'dataGridActionSlice' with reducers
export const dataGridActionSlice = createSlice({
  name: 'gridActionDetails', // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Reducer functions for updating state based on actions
    setSearchKey: (state, action) => {
      state.search = action.payload
    },
    setSortKey: (state, action) => {
      state.sort = action.payload
    },
    setFilterByRaceKeys: (state, action) => {
      state.races = action.payload
    },
    setFilterByGender: (state, action) => {
      state.gender = action.payload
    },
    resetFilterConfiguration: (state) => {
      // Reset the state to the initial state
      state = initialState
    }
  }
})

// Action creators are automatically generated for each reducer function
export const {
  setSearchKey,
  setSortKey,
  setFilterByRaceKeys,
  setFilterByGender,
  resetFilterConfiguration
} = dataGridActionSlice.actions

export default dataGridActionSlice.reducer
