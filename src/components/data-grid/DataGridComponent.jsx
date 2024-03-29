import React from 'react'
import { Card, CardContent, CardHeader, Container, Divider, IconButton, Tooltip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import { dataGridHelpers } from './Helper'
import DetailsPreviewComponent from '../character-details-preview/DetailsPreviewComponent'
import TableTopComponent from '../table-top/TableTopComponent'
import tableTopStyle from '../table-top/Style'
import CustomPagination from './CustomPagination'
import { FilterList } from '@mui/icons-material'
import { dataGridStyle } from './Style'

const DataGridComponent = () => {
  const style = dataGridStyle
  // Access the Redux store to get the data and state you need
  const { details } = useSelector(state => state.dataGridSlice)
  const { isOpen, data } = useSelector((state) => state.previewModalSlice)

  // Retrieve table columns and event handlers using a helper function
  const {
    tableColumns,
    handlePageChange,
    handlePageSizeChange,
    show,
    handleOpenFilterPanel
  } = dataGridHelpers.useDataGridHelper()

  return (
    <Container sx={{ mt: 3, pb: 3 }}>
      {/* Container for the DataGrid component */}
      <Card elevation={3} >
        {/* CardHeader with a title */}
        <CardHeader
          title={'Characters'.concat(isOpen ? ` >> ${data?.name ?? ''}` : '')}
          sx={tableTopStyle.title}
          action={
            <Tooltip title="Filter">
              <IconButton aria-label="filter" onClick={handleOpenFilterPanel}>
                <FilterList />
              </IconButton>
            </Tooltip>
          }
        />
        <Divider />
        <CardContent>
          {/* Conditional rendering based on whether a preview modal is open */}
          {
            !isOpen
              ? (
                <>
                  {/* Render TableTopComponent when the preview modal is not open */}
                  <TableTopComponent show={show} />
                  {/* DataGrid component */}
                  <DataGrid
                    sx={style.dataGrid}
                    pagination
                    hideScrollbar={true}
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
                    density='compact'
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
