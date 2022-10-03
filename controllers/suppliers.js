import { Supplier } from '../models/supplier.js'
import { User } from '../models/user.js'


function index(req, res) {
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    console.log('user: ', user)
    Supplier.findById(user.supplier.id)
    .then(supplier => {
      res.render('suppliers', {
        supplier,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    Supplier.findById(user.supplier.id)
    .then(supplier => {
      res.render('suppliers/edit', {
        supplier,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    Supplier.findByIdAndUpdate(user.supplier.id, req.body, { new: true })
    .then(supplier => {
      res.redirect(`/suppliers/`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  edit,
  update
}
