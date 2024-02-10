import customColors from '../../utils/helpers/constants/colors'

export const dataGridStyle = {
  dataGrid: {
    // mt: 2,
    zIndex: 0,
    boxShadow: 'none',
    height: 'calc(100vh - 300px)',
    '& .MuiDataGrid-columnHeader': {
      backgroundColor: customColors.textPrimary,
      color: '#ffff'
    },
    '& .MuiDataGrid-columnSeparator': {
      color: '#ffff'
    }
  }
}
