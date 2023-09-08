import React from 'react'
import { Card, CardContent, CardHeader, Container, Divider } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import TableTopComponent from '../table-top/TableTopComponent'
import { useSelector } from 'react-redux'
import tableTopStyle from '../../components/table-top/Style'
import DetailsPreviewComponent from '../character-details-preview/DetailsPreviewComponent'
import { dataGridHelpers } from './Helper'

const DataGridComponent = () => {
  const { details } = useSelector(state => state.dataGridSlice)
  const { isOpen, data } = useSelector((state) => state.previewModalSlice)
  const {
    tableColumns,
    handlePageChange,
    handlePageSizeChange
  } = dataGridHelpers.useDataGridHelper()

  return (
    <Container>
      <Card sx={{ marginTop: 3, marginBottom: 3 }}>
        <CardHeader title={'Characters'.concat(isOpen ? ` >> ${data?.name ?? ''}` : '')} sx={tableTopStyle.title} />
        <Divider/>
        <CardContent>
          {
            !isOpen
              ? <>
                <TableTopComponent />
                <DataGrid
                  sx={{
                    mt: 2,
                    zIndex: 0,
                    boxShadow: 0
                    // height: '18rem'
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
                  rowsPerPageOptions={[10, 20, 50]}
                  paginationMode='server'
                  pageSize={details.limit}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                  keepNonExistentRowsSelected
                />
              </>
              : <DetailsPreviewComponent/>
          }
        </CardContent>
      </Card>
    </Container>
  )
}

export default DataGridComponent
