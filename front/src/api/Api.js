import axios from 'axios';

const url = 'http://localhost:8080/api';

export const postDriver = driver => {
  return axios.post(`${url}/drivers`, driver).then(response => response.data);
};

export const postWatcher = watcher => {
  return axios.post(`${url}/watchers`, watcher).then(response => response.data);
};
