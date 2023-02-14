/* eslint-disable no-undef */
import axios from 'axios'
import NProgress from 'nprogress'

const VUE_APP_API_URL= import.meta.env.VITE_APP_API_URL;

// create a new axios instance
const instance = axios.create({
  baseURL: VUE_APP_API_URL,
})

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default instance