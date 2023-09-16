import React from 'react'
import { Box, Grid, FormHelperText } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { tableTopHelpers } from './Helper'
import SearchComponent from '../text-filed/search/SearchComponent'
import tableTopStyle from './Style'
import SimpleSelectBoxComponent from '../text-filed/select-box/SimpleSelectBoxComponent'
import MultiSelectBoxComponent from '../text-filed/select-box/MultiSelectBoxComponent'
import { setFilterByGender, setSortKey } from '../../utils/helpers/contexts/redux/reducers/dataGridActionSlice'

const TableTopComponent = () => {
  // Retrieve helper functions and data from the tableTopHelpers
  const {
    handleFormSubmission,
    genderFilterDetails,
    raceFilterDetails,
    sortingDetails,
    loading
  } = tableTopHelpers.useTableTopHelper()

  return (
    <Grid container gap={1}>
      <Grid item xs={12}>
        {/* Form for filtering and sorting */}
        <Box component='form' onSubmit={handleFormSubmission}>
          {/* Grid layout for form elements */}
          <Grid container spacing={1} display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
            {/* Search input */}
            <Grid item lg={8} md={6} xs={12} sx={tableTopStyle.formFieldWrapper}>
              <FormHelperText sx={tableTopStyle.formLabel}>Search</FormHelperText>
              <SearchComponent />
            </Grid>
            {/* Sorting dropdown */}
            <Grid item lg={4} md={6} xs={12} sx={tableTopStyle.formFieldWrapper}>
              <FormHelperText htmlFor={sortingDetails.id} sx={tableTopStyle.formLabel}>Sort By</FormHelperText>
              <SimpleSelectBoxComponent
                id={sortingDetails.id}
                stateName='sort'
                setState={setSortKey}
                placeholder={sortingDetails.placeholder}
                items={sortingDetails.items} />
            </Grid>
          </Grid>
          {/* Grid layout for additional filters */}
          <Grid container spacing={1} mt={0} display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
            {/* Race multi-select */}
            <Grid item lg={5} md={6} xs={12} sx={tableTopStyle.formFieldWrapper}>
              <FormHelperText
                htmlFor={raceFilterDetails.id}
                sx={tableTopStyle.formLabel}>
                Race
              </FormHelperText>
              <MultiSelectBoxComponent
                id={raceFilterDetails.id}
                placeholder={raceFilterDetails.placeholder}
                items={raceFilterDetails.items} />
            </Grid>
            {/* Gender dropdown */}
            <Grid item lg={5} md={6} sm={12} xs={12} sx={tableTopStyle.formFieldWrapper}>
              <FormHelperText
                htmlFor={genderFilterDetails.id}
                sx={tableTopStyle.formLabel}>
                Gender
              </FormHelperText>
              <SimpleSelectBoxComponent
                id={genderFilterDetails.id}
                stateName='gender'
                setState={setFilterByGender}
                placeholder={genderFilterDetails.placeholder}
                items={genderFilterDetails.items} />
            </Grid>
            {/* Submit button */}
            <Grid item flex={1} sx={{ ...tableTopStyle.formFieldWrapper }} justifyContent={{ lg: 'right', xs: 'center' }} >
              <LoadingButton
                type='submit'
                loading={loading}
                variant='contained'
                size='medium'
                sx={{ width: '10rem' }}>Submit</LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default TableTopComponent
