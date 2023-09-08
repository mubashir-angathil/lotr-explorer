import React from 'react'
import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material'
import PropTypes from 'prop-types' // Import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterByRaceKeys } from '../../../utils/helpers/contexts/redux/reducers/dataGridActionSlice'

const MultiSelectBoxComponent = ({ placeholder, id, items }) => {
  const dispatch = useDispatch()

  // Get the 'races' value from the Redux store using useSelector
  const { races } = useSelector(state => state.dataGridActionSlice)

  // Define a function to handle changes in the multi-select box
  const handleChange = (event) => {
    const { target: { value } } = event

    // Dispatch an action to update the filter by race keys in the Redux store
    dispatch(setFilterByRaceKeys(value))
  }

  return (
    <FormControl fullWidth>
      {/* Create a multi-select box */}
      <Select
        id={id}
        multiple
        fullWidth
        displayEmpty
        value={races}
        onChange={handleChange}
        size='small'
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{placeholder}</em>
          }

          return selected.join(', ')
        }}
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ minWidth: 200 }}
      >
        {/* Add a placeholder option */}
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>

        {/* Map through 'items' and create menu options */}
        {items.map((item) => (
          <MenuItem
            key={item}
            value={item}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MultiSelectBoxComponent

// Add PropTypes validation for the 'placeholder', 'id', and 'items' props
MultiSelectBoxComponent.propTypes = {
  placeholder: PropTypes.string, // Validate 'placeholder' as a string
  id: PropTypes.string, // Validate 'id' as a string
  items: PropTypes.arrayOf( // Validate 'items' as an array of string
    PropTypes.string
  )
}
