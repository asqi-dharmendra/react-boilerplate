import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/test/api/";

export const getDepartments = () => axios.get(`${API_URL}departments/`);
export const getEmployees = () => axios.get(`${API_URL}employees/`);

