import React from 'react'
import { Box, FormLabel, Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { tableTopHelpers } from './Helper'
import SearchComponent from '../text-filed/search/SearchComponent'
import tableTopStyle from './Style'
import SimpleSelectBoxComponent from '../text-filed/select-box/SimpleSelectBoxComponent'
import MultiSelectBoxComponent from '../text-filed/select-box/MultiSelectBoxComponent'
import { setFilterByGender, setSortKey } from '../../utils/helpers/contexts/redux/reducers/dataGridActionSlice'

const TableTopComponent = () => {
  const {
    handleFormSubmission,
    genderFilterDetails,
    raceFilterDetails,
    sortingDetails
  } = tableTopHelpers.useTableTopHelper()

  return (
    <Grid container gap={1}>
      <Grid item xs={12}>
        <Box component='form' onSubmit={handleFormSubmission}>
          <Grid container spacing={2} display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
            <Grid item lg={7} flex={1} display='flex' flexDirection='row' alignItems='center'>
              <FormLabel htmlFor='search' sx={tableTopStyle.formLabel}>Search</FormLabel>
              <SearchComponent />
            </Grid>
            <Grid item flex={1} display='flex' flexDirection='row' alignItems='center'>
              <FormLabel htmlFor={sortingDetails.id} sx={tableTopStyle.formLabel}>Sort By</FormLabel>
              <SimpleSelectBoxComponent
                id={sortingDetails.id}
                stateName='sort'
                setState={setSortKey}
                placeholder={sortingDetails.placeholder}
                items={sortingDetails.items} />
            </Grid>
            <Grid item flex={1} flexWrap='wrap' flexDirection='row' display='flex' gap={1}>
              <Grid display='flex' flex={1} flexDirection='row' alignItems='center'>
                <FormLabel
                  htmlFor={raceFilterDetails.id}
                  sx={tableTopStyle.formLabel}>
                  Race
                </FormLabel>
                <MultiSelectBoxComponent
                  id={raceFilterDetails.id}
                  placeholder={raceFilterDetails.placeholder}
                  items={raceFilterDetails.items} />
              </Grid>
              <Grid item flex={1} display='flex' flexDirection='row' alignItems='center'>
                <FormLabel
                  htmlFor={genderFilterDetails.id}
                  sx={tableTopStyle.formLabel}>
                  Gender
                </FormLabel>
                <SimpleSelectBoxComponent
                  id={genderFilterDetails.id}
                  stateName='gender'
                  setState={setFilterByGender}
                  placeholder={genderFilterDetails.placeholder}
                  items={genderFilterDetails.items} />
              </Grid>
            </Grid>
            <Grid item display='flex' flexDirection='row' alignItems='center' gap={1}>
              <LoadingButton
                type='submit'
                loading={false}
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
