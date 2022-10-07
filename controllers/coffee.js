import { Supplier } from '../models/supplier.js'
import { Coffee } from '../models/coffee.js'
import { User } from '../models/user.js'


async function show(req, res) {
  let countries =  await Coffee.aggregate([
    {
      $group: {
        _id: '$country',
        count: { $sum: 1 }
      }
    }
  ])

  const promises = countries.map(country =>
    Coffee.find({country:country._id}).limit(3)
  )

  Promise.all(promises).then(coffees => {
    console.log(coffees)
    res.render('coffee', {
      coffees
    })
  })
  
  // countries.forEach(element => {
  //   Coffee.find({country: element._id}).limit(3)
  //   .then(coffees => {
  //     countriesCoffeeArray.push(coffees)
  //   })
  // })


  // console.log(countriesCoffeeArray)  
}

export{
  show,
}