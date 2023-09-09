import React from 'react'
import { Box, FormHelperText, MenuItem, Pagination, Select } from '@mui/material'
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'

const CustomPagination = () => {
  // Access Redux store to get data
  const { details } = useSelector((state) => state.dataGridSlice)

  // Get the Grid API context and page-related information
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  // Handler for changing the number of rows per page
  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10)
    apiRef.current.setPageSize(newRowsPerPage)
  }

  return (
    <Box
      display='flex'
      width='100%'
      justifyContent={{ xs: 'center', sm: 'space-between' }}
      alignItems='center'
      flexWrap='wrap'
      gap={1}
      p={1}>
      {/* Pagination Component */}
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        count={pageCount}
        boundaryCount={0}
        siblingCount={1}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />

      {/* Rows per Page Dropdown */}
      <Box display='flex'>
        {/* Label for the dropdown */}
        <FormHelperText sx={{ fontSize: '1rem', fontWeight: 'bold', pr: 1 }}>Limit</FormHelperText>

        {/* Select Component for choosing rows per page */}
        <Select
          variant='outlined'
          value={details.limit}
          onChange={handleRowsPerPageChange}
          size='small'
        >
          {/* Dropdown options */}
          {[10, 20, 50].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  )
}

export default CustomPagination
