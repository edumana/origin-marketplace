import { Router } from 'express'
import * as suppliersCtrl from '../controllers/suppliers.js'

const router = Router()

// GET /profiles

router.get('/', isLoggedIn, suppliersCtrl.index)
router.get('/edit', isLoggedIn, suppliersCtrl.edit)
router.get('/coffees', isLoggedIn, suppliersCtrl.showCoffee)
router.get('/coffees/new', isLoggedIn, suppliersCtrl.newCoffee)
router.get('/coffees/:id/edit', isLoggedIn, suppliersCtrl.editCoffee)
router.put('/', isLoggedIn, suppliersCtrl.update)
router.put('/coffees/:id', isLoggedIn, suppliersCtrl.updateCoffee)
router.post('/coffees', isLoggedIn, suppliersCtrl.createCoffee)
router.post('/farms/add', isLoggedIn, suppliersCtrl.addFarm)
router.delete('/farms/:id', isLoggedIn, suppliersCtrl.deleteFarm)
router.delete('/coffees/:id', isLoggedIn, suppliersCtrl.deleteCoffee)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  router
}