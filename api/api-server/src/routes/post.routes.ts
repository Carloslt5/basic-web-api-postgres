import express from 'express'
import { getPost, createPost } from '../controllers/post.controllers'

const router = express.Router()

router.get('/', getPost)
router.post('/createPost', createPost)

export default router
