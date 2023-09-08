import React from 'react'
import { FormControl, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { setSearchKey } from '../../../utils/helpers/contexts/redux/reducers/dataGridActionSlice'
import { useDispatch } from 'react-redux'

const SearchComponent = () => {
  // Get access to the Redux dispatch function.
  const dispatch = useDispatch()

  // Define a function to handle changes in the search input.
  const handleChange = (event) => {
    // Get the value entered in the search input.
    const key = event.target.value

    // Dispatch an action to update the search key in the Redux store.
    dispatch(setSearchKey(key))
  }

  return (
    <FormControl fullWidth>
      {/* Create a text input field for searching. */}
      <TextField
        fullWidth
        id="search"
        size='small'
        placeholder='By name'
        variant='outlined'
        sx={{ minWidth: 200 }}
        onChange={handleChange} // Call the handleChange function when the input value changes.
        InputProps={{
          // Add an end adornment with a search icon to the input field.
          endAdornment: <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }}
      />
    </FormControl>
  )
}

export default SearchComponent
