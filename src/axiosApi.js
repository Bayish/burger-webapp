import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://food-burger-25b44-default-rtdb.europe-west1.firebasedatabase.app' // Your URL here!
});

// axiosApi.interceptors.request.use(req => {
//   console.log('[in request interceptor', req);
//   return req;
// });
//
// axiosApi.interceptors.response.use(res => {
//   console.log('[in request interceptor', res);
//   return res;
// }, err => {
//   console.log('[In error response interceptor]', err);
//   throw err;
// });
export default axiosApi;