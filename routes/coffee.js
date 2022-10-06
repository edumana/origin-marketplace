import { Router } from 'express'
import * as coffeeCtrl from '../controllers/coffee.js'

const router = Router()

// GET /profiles

router.get('/', coffeeCtrl.show)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  router
}