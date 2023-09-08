import React from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'
import PropTypes from 'prop-types' // Import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

const SimpleSelectBoxComponent = ({ placeholder, id, items, setState, stateName }) => {
  const dispatch = useDispatch()

  // Get the state from the Redux store using useSelector
  const states = useSelector(state => state.dataGridActionSlice)

  // Define a function to handle changes in the select box
  const handleChange = (event) => {
    // Dispatch an action to set the state using the provided 'setState' function
    dispatch(setState(event.target.value))
  }

  return (
    <FormControl fullWidth>
      {/* Create a select box */}
      <Select
        id={id}
        value={states?.[stateName] ?? ''}
        fullWidth
        size='small'
        sx={{ minWidth: 200 }}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {/* Add a disabled option with the provided 'placeholder' */}
        <MenuItem value='' disabled>
          <em>{placeholder}</em>
        </MenuItem>

        {/* Add an option for 'none' */}
        <MenuItem value=''>
          <em>none</em>
        </MenuItem>

        {/* Map through 'items' and create menu options based on the provided data */}
        {items?.map((item) => {
          return (
            <MenuItem key={item.label} value={item?.value ? item.value : item.label}>
              {item.label}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default SimpleSelectBoxComponent

// Add PropTypes validation for the 'placeholder', 'id', 'items', 'setState', and 'stateName' props
SimpleSelectBoxComponent.propTypes = {
  placeholder: PropTypes.string.isRequired, // Validate 'placeholder' as a required string
  id: PropTypes.string.isRequired, // Validate 'id' as a required string
  items: PropTypes.arrayOf( // Validate 'items' as an array of objects with specific shape
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Validate 'label' as a required string
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // Validate 'value' as either a string or a number
    })
  ),
  setState: PropTypes.func.isRequired, // Validate 'setState' as a required function
  stateName: PropTypes.string.isRequired // Validate 'stateName' as a required string
}
