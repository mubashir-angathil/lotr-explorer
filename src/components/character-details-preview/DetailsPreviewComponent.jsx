import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { updateOpenStatus } from '../../utils/helpers/contexts/redux/reducers/generalSlice'

const DetailsPreviewComponent = () => {
  // Access the data and modal open status from Redux store
  const { data } = useSelector((state) => state.previewModalSlice)
  const dispatch = useDispatch()

  // Define a function to handle closing the modal
  const handleModalClose = () => dispatch(updateOpenStatus())

  // Format the data received from the API response
  const formattedData = React.useMemo(() => {
    const { name, wikiUrl, race, gender, height, hair, realm, birth, spouse, death } = data
    return {
      name,
      wikiUrl,
      race,
      gender,
      height,
      hair,
      realm,
      birth,
      spouse,
      death
    }
  }, [data])

  return (
    <Grid container gap={2} padding={1} sx={{ transition: '0.5s ' }}>
      {data !== undefined
        ? Object.entries(formattedData).map(([key, value]) => (
          <Grid item key={key} xs={12} display='flex'>
            <Typography width={100} textTransform='capitalize'>{key} </Typography>
            <Typography>
              {
                value !== ''
                  ? value
                  : '-'
              }
            </Typography>
          </Grid>
        ))
        : 'Details not found'
      }

      <Grid item xs={12} display='inline-flex' justifyContent='end'>
        <Button size='small' variant='contained' onClick={handleModalClose}>Close</Button>
      </Grid>
    </Grid>
  )
}

export default DetailsPreviewComponent
