import express from 'express'

const router = express.Router()

router.use('/post', (req, res, next): void => {
  res.json('hola post')
})

export default router
