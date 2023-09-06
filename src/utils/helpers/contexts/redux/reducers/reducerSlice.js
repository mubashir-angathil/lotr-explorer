import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'name',
  initialState: {
    value: 0
  },
  reducers: {
  }
})

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export default counterSlice.reducer
