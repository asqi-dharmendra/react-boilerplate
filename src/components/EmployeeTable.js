import { Box, FormControl, InputLabel, Select, MenuItem, Card, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const EmployeeTable = ({ employees, departments, filterName, setFilterName, filterDepartment, setFilterDepartment, filteredEmployees }) => {

  const columns = [
    { field: 'name', headerName: 'Name', width: 400 },
    { field: 'department_name', headerName: 'Department', width: 400 },
    { field: 'address', headerName: 'Address', width: 400 }
  ];

  return (
    <Card variant="outlined" sx={{ padding: '20px', boxShadow: 3, backgroundColor: '#fff' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="name-filter-label">Filter by Name</InputLabel>
            <Select
              labelId="name-filter-label"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              label="Filter by Name"
            >
              {employees.map((employee) => (
                <MenuItem key={employee.id} value={employee.name}>
                  {employee.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="department-filter-label">Filter by Department</InputLabel>
            <Select
              labelId="department-filter-label"
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              label="Filter by Department"
            >
              {departments.map((department) => (
                <MenuItem key={department.id} value={department.id}>
                  {department.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ height: 400, width: '100%', marginTop: '20px' }}>
        <DataGrid
          rows={filteredEmployees}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </Card>
  );
};

export default EmployeeTable;
