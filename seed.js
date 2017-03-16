let db = require('./db')

db.Festival.remove({}, (err) => {
  if(err){
    console.log('error removing db')
  }
  let festival = db.Festival.create({name: "Coachella", location: "Indio, CA"})
  console.log(festival)
})
