import {Router} from "express"

import {SessionsControler} from "@/controllers/sessions-controller"

const sessionRoutes = Router()
const sessionsControler = new SessionsControler()

sessionRoutes.post("/", sessionsControler.create)

export {sessionRoutes}