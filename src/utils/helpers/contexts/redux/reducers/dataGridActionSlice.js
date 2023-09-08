import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: undefined,
  sort: undefined,
  races: [],
  gender: undefined
}

export const dataGridActionSlice = createSlice({
  name: 'gridActionDetails',
  initialState,
  reducers: {
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
      state = initialState
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSearchKey, setSortKey, setFilterByRaceKeys, setFilterByGender, resetFilterConfiguration } = dataGridActionSlice.actions

export default dataGridActionSlice.reducer
