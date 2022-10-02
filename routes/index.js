import { Router } from 'express'
const router = new Router()

// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index')
})

export {
  router
}
