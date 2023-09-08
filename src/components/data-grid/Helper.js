import React from 'react'
import services from '../../utils/services/services'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, updateDataGridDetails, updatePaginationParams, updateRowData } from '../../utils/helpers/contexts/redux/reducers/dataGridSlice'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { setPreviewDetails } from '../../utils/helpers/contexts/redux/reducers/generalSlice'
import { enqueueSnackbar } from 'notistack'

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
      sortable: false,
      maxWidth: 90
    },
    {
      field: 'name',
      headerName: 'Name',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      sortable: false,
      minWidth: 300
    },
    {
      field: 'race',
      headerName: 'Race',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      sortable: false,
      minWidth: 280
    },
    {
      field: 'gender',
      headerName: 'gender',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
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
    // Calculate the offset based on the newPage and limit
    const newOffset = newPage * limit

    // Dispatch the updated pagination parameters
    dispatch(updatePaginationParams({ page: newPage, limit, offset: newOffset }))
  }

  // Dispatch an action to update the rows per page
  const handlePageSizeChange = (pageSize) => {
    dispatch(updatePaginationParams({ page: 0, limit: pageSize, offset: 0 }))
  }

  // Character details API handler
  const handleFetchCharacterDetails = (characterId) => {
    if (characterId) {
      dispatch(setLoading(true))
      getCharacterDetailsByID(characterId)
    } else {
      enqueueSnackbar({ message: 'Character id is missing, try again !!', variant: 'error' })
    }
  }

  // Initial data fetching API Call
  React.useEffect(() => {
    getAllCharacters()
  }, [page, limit, offset])

  return {
    handlePageChange,
    handlePageSizeChange,
    tableColumns
  }
}

// Custom hook to handle dataGrid APIs
const useDataGridAPIHelper = () => {
  const dataGridConfig = useSelector((state) => state.dataGridActionSlice)
  const { limit, page, offset } = useSelector((state) => state.dataGridSlice.details)
  // redux dispatch
  const dispatch = useDispatch()

  // Fetch all character details
  const getAllCharacters = () => {
    dispatch(setLoading(true)) // Enable table loading

    services.getAllCharacters({ limit, page, offset, dataGridConfig })
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
        const { data: { message } } = err.response
        dispatch(setLoading(false))
        dispatch(updateRowData([]))

        // snackbar
        enqueueSnackbar({ message: message ?? 'Something went wrong', variant: 'error' })
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
      const { data: { message } } = err.response

      // snackbar
      enqueueSnackbar({ message: message ?? 'Something went wrong', variant: 'error' })
    })
  }

  return { getAllCharacters, getCharacterDetailsByID }
}

export const dataGridHelpers = {
  useDataGridHelper,
  useDataGridAPIHelper
}
