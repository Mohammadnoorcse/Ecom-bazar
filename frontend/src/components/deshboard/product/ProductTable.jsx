import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 ,headerClassName: 'custom-header'},
  { field: 'firstName', headerName: 'First name', width: 250,headerClassName: 'custom-header'},
  { field: 'lastName', headerName: 'Last name', width: 250,headerClassName: 'custom-header' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 250,
    headerClassName: 'custom-header',
    
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 320,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    headerClassName: 'custom-header',
    
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
export default function ProductTable() {
  return (
    <div style={{ width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      cellClassName="custom-cell"
    />
  </div>
  )
}
