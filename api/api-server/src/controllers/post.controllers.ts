import { Request, Response, NextFunction } from 'express'
import { pool } from '../db'

export const getPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = 'SELECT * FROM POSTS'
    const result = await pool.query(query)
    res.json(result.rows)
  } catch (error) {
    console.log(error)
  }
}

export const createPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { title, body } = req.body

  try {
    const query = 'INSERT INTO POSTS (title, body) VALUES($1,$2)'
    const values = [title, body]
    await pool.query(query, values)
    res.json({ message: 'Post created' })
  } catch (error) {
    console.log(error)
  }
}
