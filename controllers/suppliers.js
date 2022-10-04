import { Supplier } from '../models/supplier.js'
import { Coffee } from '../models/coffee.js'
import { User } from '../models/user.js'


function index(req, res) {
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
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

function showCoffee(req, res){
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    Supplier.findById(user.supplier.id)
    .populate('availableCoffees')
    .then(supplier => {
      res.render('suppliers/coffees', {
        supplier,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newCoffee(req, res){
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    Supplier.findById(user.supplier.id)
    .then(supplier => {
      res.render('suppliers/coffees/new', {
        supplier,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createCoffee(req, res) {
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    Supplier.findById(user.supplier._id)
    .then(supplier => {
      Coffee.create(req.body)
      .then(coffee => {
        supplier.availableCoffees.push(coffee.id)
        supplier.save()
        .then(() => {
          res.redirect(`/suppliers/coffees`)
        })      
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function editCoffee(req, res){
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    Supplier.findById(user.supplier._id)
    .populate('availableCoffees')
    .then(supplier => {
      Coffee.findOne({_id: {$nin: req.params._id}})
      .then(coffee => {
        res.render('suppliers/coffees/edit', {
          coffee,
          supplier,
        })
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  }) 
}

function updateCoffee(req, res) {
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    Supplier.findById(user.supplier._id)
    .populate('availableCoffees')
    .then(supplier => {
      Coffee.findOneAndUpdate({_id: {$nin: req.params._id}}, req.body)
      .then(coffee => {
        res.redirect('/suppliers/coffees')
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteCoffee(req, res) {
  console.log('Holi')
  User.findById(req.user.id)
  .populate('supplier')
  .then(user => {
    Supplier.findById(user.supplier._id)
    .populate('availableCoffees')
    .then(supplier => {
      Coffee.findOneAndDelete({_id: {$nin: req.params._id}})
      .then(coffee => {
        res.redirect('/suppliers/coffees')
      })
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
  update,
  showCoffee,
  newCoffee,
  createCoffee,
  editCoffee,
  updateCoffee,
  deleteCoffee,
}