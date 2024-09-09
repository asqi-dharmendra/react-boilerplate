import { useState } from 'react';
import { Button, TextField, FormControl, Card, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const EmployeeForm = ({ departments, setEmployees }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDepartment, setEmployeeDepartment] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');

  const handleSubmitEmployee = (event) => {
    event.preventDefault();
    const API_URL = "http://127.0.0.1:8000/test/api/employees/";
    axios.post(API_URL, { name: employeeName, department: employeeDepartment, address: employeeAddress })
      .then((result) => {
        setEmployees(prev => [...prev, result.data]);
        setEmployeeName('');
        setEmployeeDepartment('');
        setEmployeeAddress('');
      }).catch((err) => {
        console.error(err);
      });
  };

  return (
    <Card variant="outlined" sx={{ padding: '20px', boxShadow: 3, backgroundColor: '#fff' }}>
      <form onSubmit={handleSubmitEmployee}>
        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            label="Employee Name"
            variant="outlined"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            labelId="department-label"
            value={employeeDepartment}
            onChange={(e) => setEmployeeDepartment(e.target.value)}
            label="Department"
          >
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            multiline
            rows={4}
            value={employeeAddress}
            onChange={(e) => setEmployeeAddress(e.target.value)}
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: '10px', fontSize: '16px' }}>
          Add Employee
        </Button>
      </form>
    </Card>
  );
};

export default EmployeeForm;
