import {Router} from 'express'

export {usersRoutes} from './users-routes'

const routes = Router()
routes.use("/users", routes)