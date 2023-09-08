import React from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'
import PropTypes from 'prop-types' // Import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

const SimpleSelectBoxComponent = ({ placeholder, id, items, setState, stateName }) => {
  const dispatch = useDispatch()
  const states = useSelector(state => state.dataGridActionSlice)

  const handleChange = (event) => {
    dispatch(setState(event.target.value))
  }

  return (
  <FormControl fullWidth >
      <Select
        id={id}
        value={states?.[stateName] ?? ''}
        fullWidth
        size='small'
        sx={{ minWidth: 300 }}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value='' disabled>
          <em>{placeholder}</em>
        </MenuItem>
        <MenuItem value=''>
          <em>none</em>
        </MenuItem>
        {items?.map((item) => {
          return <MenuItem key={item.label} value={item?.value ? item.value : item.label}>{item.label}</MenuItem>
        })}
      </Select>
  </FormControl>
  )
}

export default SimpleSelectBoxComponent

// Add PropTypes validation for the 'placeholder', 'id', and 'items' props
SimpleSelectBoxComponent.propTypes = {
  placeholder: PropTypes.string.isRequired, // Validate 'placeholder' as a string
  setState: PropTypes.func.isRequired,
  stateName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired, // Validate 'id' as a string
  items: PropTypes.arrayOf( // Validate 'items' as an array of objects with specific shape
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Validate 'label' as a required string
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // Validate 'value' as either a string or a number
    })
  )
}
