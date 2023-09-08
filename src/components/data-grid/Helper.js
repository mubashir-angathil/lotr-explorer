import React from 'react'
import services from '../../utils/services/services'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, updateDataGridDetails, updateRowData } from '../../utils/helpers/contexts/redux/reducers/dataGridSlice'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { setPreviewDetails } from '../../utils/helpers/contexts/redux/reducers/generalSlice'

const useDataGridHelper = () => {
  const dispatch = useDispatch()

  // dataGridSlice redux state
  const { page, limit, offset } = useSelector(state => state.dataGridSlice.details)

  // Custom hook
  const { getAllCharacters, getCharacterDetailsByID } = useDataGridAPIHelper()

  // Table config
  const tableColumns = [
    {
      field: '_id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
      maxWidth: 90
    },
    {
      field: 'name',
      headerName: 'Name',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 300
    },
    {
      field: 'race',
      headerName: 'Race',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 280
    },
    {
      field: 'gender',
      headerName: 'gender',
      headerAlign: 'center',
      align: 'center',
      width: 200
    },
    // Action button config
    {
      field: 'action',
      headerName: 'Actions',
      headerAlign: 'center',
      align: 'center',
      width: 200,
      sortable: false,
      filterable: false,
      renderCell: (obj) => {
        return <Button onClick={() => handleFetchCharacterDetails(obj.id)} endIcon={<KeyboardDoubleArrowRightIcon />}>Details</Button>
      }
    }
  ]

  // Dispatch an action to update the page
  const handlePageChange = (newPage) => {
    return getAllCharacters({ page: newPage, limit, offset: offset + newPage })
  }

  // Dispatch an action to update the rows per page
  const handlePageSizeChange = (pageSize) => {
    dispatch(setLoading(true))
    getAllCharacters({ page, limit: pageSize })
  }

  // Character details API handler
  const handleFetchCharacterDetails = (characterId) => {
    if (characterId) {
      dispatch(setLoading(true))
      getCharacterDetailsByID(characterId)
    } else {
      alert('Something went wrong')
    }
  }

  // Initial data fetching API Call
  React.useEffect(() => {
    dispatch(setLoading(true)) // Enable table loading
    getAllCharacters({ offset }) //  Fetch initial table data
  }, [])

  return {
    handlePageChange,
    handlePageSizeChange,
    tableColumns
  }
}

// Custom hook to handle dataGrid APIs
const useDataGridAPIHelper = () => {
  // redux dispatch
  const dispatch = useDispatch()

  // Fetch all character details
  const getAllCharacters = ({ page, limit, offset }) => {
    services.getAllCharacters({ page, limit, offset })
      .then((response) => {
        const { status } = response

        // Set table loading false
        dispatch(setLoading(false))

        if (status >= 200 && status <= 299) {
          // update table details
          dispatch(updateDataGridDetails(response.data))
        } else {
          // set [] to gird rows
          dispatch(updateRowData([]))
        }
      }).catch((err) => {
      // Handle an error response (status code outside of 200-299)
        const { status, data: { message } } = err.response
        console.error('Error: ', status, message)

        dispatch(setLoading(false))
        dispatch(updateRowData([]))
      })
  }

  // Fetch character details by Id
  const getCharacterDetailsByID = (characterId) => {
    services.getCharacterDetailsById(characterId).then((response) => {
      const { status } = response
      dispatch(setLoading(false))
      if (status >= 200 && status <= 299) {
        /**
         * Update redux state
         * @data is an array of data objects or []
         * @isOpen is a boolean
         */
        dispatch(setPreviewDetails({
          data: response.data.docs[0],
          isOpen: true
        }))
      }
    }).catch((err) => {
      const { status, data: { message } } = err.response
      console.error('Error: ', status, message)
    })
  }

  return { getAllCharacters, getCharacterDetailsByID }
}

export const dataGridHelpers = {
  useDataGridHelper
}
