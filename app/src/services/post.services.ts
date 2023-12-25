import axios, { AxiosInstance } from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005/api'

class PostServices {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
    })
  }

  getPost() {
    return this.instance.get('/post')
  }
}

const postservices = new PostServices()
export default postservices
