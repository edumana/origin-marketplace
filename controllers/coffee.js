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

  Promise.all(promises).then((coffees) => {
    res.render('coffee', {
      coffees
    })
  })
  
}

export{
  show,
}