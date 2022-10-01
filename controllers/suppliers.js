import { Supplier } from '../models/supplier.js'

function index(req, res) {
  // Make the query object to use with Supplier.find based on
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Sorting by name
  Supplier.find(modelQuery)
  .sort("name")
  .then(suppliers => {
    // Passing profiles and name, for use in the EJS
    res.render("suppliers/index", { 
      suppliers, 
      name: req.query.name,
    })
  })
  .catch(err => {
    if (err) return next(err)
  })
}

// function createFact(req, res) {
//   // find the PROFILE
//   Profile.findById(req.user.studentProfile._id)
//   .then(profile => {
//     profile.facts.push(req.body)
//     profile.save()
//     .then(() => {
//       res.redirect('/profiles')
//     })
//     .catch(err => {
//       console.log(err)
//       res.redirect("/profiles")
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect("/profiles")
//   })
// }

//function deleteFact(req, res) {}

export {
  index,
  //createFact,
  //deleteFact,
}
