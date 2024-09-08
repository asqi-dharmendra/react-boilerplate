import { useState } from 'react';
import { Button, TextField, FormControl, Card } from '@mui/material';
import axios from 'axios';

const DepartmentForm = ({ setDepartments }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmitDepartment = (event) => {
    event.preventDefault();
    const API_URL = "http://127.0.0.1:8000/test/api/departments/";
    axios.post(API_URL, { name, department })
      .then((result) => {
        setDepartments(prev => [...prev, result.data]);
        setName('');
        setDepartment('');
      }).catch((err) => {
        console.error(err);
      });
  };

  return (
    <Card variant="outlined" sx={{ padding: '20px', boxShadow: 3, backgroundColor: '#fff' }}>
      <form onSubmit={handleSubmitDepartment}>
        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            label="Department"
            variant="outlined"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: '10px', fontSize: '16px' }}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default DepartmentForm;
