import React from 'react'
import { FormControl, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { setSearchKey } from '../../../utils/helpers/contexts/redux/reducers/dataGridActionSlice'
import { useDispatch } from 'react-redux'

const SearchComponent = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const key = event.target.value
    dispatch(setSearchKey(key))
  }
  return (
    <FormControl fullWidth>
      <TextField
        fullWidth
        id="search"
        size='small'
        placeholder='By name'
        variant='outlined'
        sx={{ minWidth: '18rem' }}
        onChange={handleChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }}
      />
    </FormControl>
  )
}

export default SearchComponent
