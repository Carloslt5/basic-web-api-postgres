import express from 'express'
import { pool } from '../db'

const router = express.Router()

router.use('/post', async (req, res, next): Promise<void> => {
  try {
    const query = 'SELECT * FROM POSTS'
    const result = await pool.query(query)
    res.json(result.rows)
  } catch (error) {
    console.log(error)
  }
})

export default router
