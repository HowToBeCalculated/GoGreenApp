import { Container} from '@mui/material';
import { DataGrid} from '@mui/x-data-grid';

//Datagrid to display podcasts information as well as saved information on user profile
export default function GoGreenDataGrid({ route, columns, id}) {
    console.log('received in route: ', route);
  
  return (
    <Container sx={{mt: 5, backgroundColor: 'white', width: '100%', borderRadius: '10px'}}>
      <DataGrid
        getRowId={(row) => row.history_id ? row.history_id : row.id ? row.id : row.goal_id}
        rows={route}
        columns={columns}
        autoHeight
        align='center'
        marginLeft={10}
        getRowClassName={() => `row-theme`}
        sx={{fontSize: 15,
          border: 'none',
          p: 3,
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.dark',
            fontWeight: 'heavy',
            align: 'center'
          },
          '& .header-styling': {
            color:'white',
            fontFamily: 'Poppins',
            backgroundColor: 'primary.main'
          },
          '& .row-theme': {
            backgroundColor: 'white',
            fontSize: '13px'
          } }}
      >
      </DataGrid>
    </Container>
  );
}