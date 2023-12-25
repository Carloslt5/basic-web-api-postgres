import axios, { AxiosInstance } from 'axios'

class PostServices {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    })
  }

  getPost() {
    return this.instance.get('/post')
  }
}

const postservices = new PostServices()
export default postservices
