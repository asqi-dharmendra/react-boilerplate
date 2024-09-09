import { useState, useEffect } from 'react';
import './App.css';
import { Box, Grid } from '@mui/material';
import DepartmentForm from './components/DepartmentForm';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import { getDepartments, getEmployees } from './services/api';

function App() {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  useEffect(() => {
    // Fetch departments and employees from the API
    getDepartments().then((response) => {
      setDepartments(response.data);
    });

    getEmployees().then((response) => {
      setEmployees(response.data);
    });
  }, []);

  useEffect(() => {
    let filtered = employees;

    // Filter by name if `filterName` is set
    if (filterName) {
      filtered = filtered.filter(employee =>
        employee.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }

    // Filter by department if `filterDepartment` is set
    if (filterDepartment) {
      filtered = filtered.filter(employee =>
        employee.department === parseInt(filterDepartment)
      );
    }

    setFilteredEmployees(filtered);
  }, [filterName, filterDepartment, employees]);

  return (
    <div className="App">
      <Box display="flex" justifyContent="center" minHeight="100vh">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={6}>
            <DepartmentForm setDepartments={setDepartments} />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <EmployeeForm departments={departments} setEmployees={setEmployees} />
          </Grid>
          <Grid item xs={12}>
            <EmployeeTable
              employees={employees}
              departments={departments}
              filterName={filterName}
              setFilterName={setFilterName}
              filterDepartment={filterDepartment}
              setFilterDepartment={setFilterDepartment}
              filteredEmployees={filteredEmployees}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
