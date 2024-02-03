import { Router } from 'express'
import { sendOTP } from '../controllers/login.handler.js'

const loginRouter = Router()

loginRouter.post('/login', sendOTP)

export default loginRouter