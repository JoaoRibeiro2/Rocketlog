import {Router} from 'express'

import {UsersController} from '@/controllers/users-controller'

const usersRoutes = Router()
const UsersController = new UsersController()

usersRoutes.get("/", usersController.create)

export {usersRoutes}