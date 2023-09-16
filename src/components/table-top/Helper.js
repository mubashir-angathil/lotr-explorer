import { useDispatch, useSelector } from 'react-redux'
import { updatePaginationParams } from '../../utils/helpers/contexts/redux/reducers/dataGridSlice'
import { dataGridHelpers } from '../data-grid/Helper'

const useTableTopHelper = () => {
  // Access Redux store to get data and state
  const dataGridConfig = useSelector((state) => state.dataGridActionSlice)
  const { limit, loading } = useSelector((state) => state.dataGridSlice.details)
  const { getAllCharacters } = dataGridHelpers.useDataGridAPIHelper()
  const dispatch = useDispatch()

  // Define details for sorting, race filter, and gender filter
  const sortingDetails = {
    placeholder: 'By name (/descending)',
    id: 'sort',
    items: [
      {
        label: 'Ascending',
        value: 'asc'
      },
      {
        label: 'Descending',
        value: 'desc'
      }
    ]
  }

  const raceFilterDetails = {
    placeholder: 'Select one or more races',
    id: 'race-select',
    items: ['Human', 'Elf', 'Dwarf', 'Hobbit']
  }

  const genderFilterDetails = {
    placeholder: 'Male/Female/Any',
    id: 'filter',
    items: [
      {
        label: 'Male'
      },
      {
        label: 'Female'
      },
      {
        label: 'Any'
      }
    ]
  }

  // Check if any filters are applied
  const isFiltrationApplied = () => {
    return Object.keys(dataGridConfig).some((key) => dataGridConfig[key] !== undefined)
  }

  // Handle form submission, triggering a data update if filters are applied
  const handleFormSubmission = (event) => {
    event.preventDefault()

    if (isFiltrationApplied()) {
      // Reset pagination and trigger data retrieval with updated filters
      dispatch(updatePaginationParams({ page: 0, limit, offset: 0 }))
      getAllCharacters()
    }
  }

  return {
    loading,
    sortingDetails,
    raceFilterDetails,
    genderFilterDetails,
    handleFormSubmission
  }
}

export const tableTopHelpers = { useTableTopHelper }
