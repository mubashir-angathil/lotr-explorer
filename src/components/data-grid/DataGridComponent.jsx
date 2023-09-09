import React from 'react'
import { Card, CardContent, CardHeader, Container, Divider } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import { dataGridHelpers } from './helper'
import DetailsPreviewComponent from '../character-details-preview/DetailsPreviewComponent'
import TableTopComponent from '../table-top/TableTopComponent'
import tableTopStyle from '../../components/table-top/style'
import CustomPagination from './CustomPagination'

const DataGridComponent = () => {
  // Access the Redux store to get the data and state you need
  const { details } = useSelector(state => state.dataGridSlice)
  const { isOpen, data } = useSelector((state) => state.previewModalSlice)

  // Retrieve table columns and event handlers using a helper function
  const {
    tableColumns,
    handlePageChange,
    handlePageSizeChange
  } = dataGridHelpers.useDataGridHelper()

  return (
    <Container sx={{ mt: 3, pb: 3 }}>
      {/* Container for the DataGrid component */}
      <Card elevation={3}>
        {/* CardHeader with a title */}
        <CardHeader title={'Characters'.concat(isOpen ? ` >> ${data?.name ?? ''}` : '')} sx={tableTopStyle.title} />
        <Divider />
        <CardContent>
          {/* Conditional rendering based on whether a preview modal is open */}
          {
            !isOpen
              ? (
                <>
                  {/* Render TableTopComponent when the preview modal is not open */}
                  <TableTopComponent />
                  {/* DataGrid component */}
                  <DataGrid
                    sx={{
                      mt: 2,
                      zIndex: 0,
                      boxShadow: 'none'
                    }}
                    autoHeight
                    pagination
                    scrollbarSize={0}
                    loading={details.loading}
                    columns={tableColumns}
                    rows={details.rowData}
                    getRowId={(row) => row._id}
                    disableSelectionOnClick
                    page={details.page}
                    rowCount={details.total}
                    paginationMode='server'
                    pageSize={details.limit}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    keepNonExistentRowsSelected
                    disableColumnMenu
                    components={{
                      Pagination: CustomPagination
                    }}
                  />
                </>
                )
              : (
                // Render DetailsPreviewComponent when the preview modal is open
                <DetailsPreviewComponent />
                )}
        </CardContent>
      </Card>
    </Container>
  )
}

export default DataGridComponent
