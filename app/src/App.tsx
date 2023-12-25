import { useCallback, useEffect, useState } from 'react'
import './App.css'
import postservices from './services/post.services'

type Post = {
  title: string
  body: string
}

function App() {
  const [postData, setPostData] = useState<Post[] | null>(null)

  const loadPostData = useCallback(async () => {
    const { data } = await postservices.getPost()
    console.log('esto es la data', data)
    setPostData(data)
  }, [])

  useEffect(() => {
    loadPostData()
  }, [loadPostData])

  return (
    <>
      <h1>Listado de post</h1>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        postData.map((post: Post) => {
          return (
            <>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </>
          )
        })
      )}
    </>
  )
}

export default App
