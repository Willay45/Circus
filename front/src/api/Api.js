import axios from 'axios';

const url = 'http://localhost:8080/api';

export const postDriver = driver => {
  return axios.post(`${url}/drivers`, driver).then(response => response.data);
};

export const getDriver = () => {
  return axios.get(`${url}/drivers`).then(response => response.data);
};

export const deleteDriver = id => {
  return axios.delete(`${url}/drivers/${id}`).then(response => response.data);
};

export const postWatcher = watcher => {
  return axios.post(`${url}/watchers`, watcher).then(response => response.data);
};

export const getWatcher = () => {
  return axios.get(`${url}/watchers`).then(response => response.data);
};

export const deleteWatcher = id => {
  return axios.delete(`${url}/watchers/${id}`).then(response => response.data);
};