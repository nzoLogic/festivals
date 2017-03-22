let db = require('./db')
let festivals = [{
        name: "Coachella",
        location: "Indio, CA",
        date: "Apr 14 - Apr 23"
    },
    {
        name: "Electric Forrest",
        location: "Grand Township, MA",
        date: "Jun 22 - July 2"
    },
    {
        name: "EDC Las Vegas",
        location: "Electric Daisy Carnival, NV",
        date: "June 16 - June 18"
    }
]
db.Festival.remove({}, (err) => {
    if (err) {
        console.log('error removing db')
    }
    festivals.forEach(saveFestival)
})

function saveFestival(festival) {
    db.Festival.create(festival, errorHandler)
}

function errorHandler(err) {
    if (err) {
      console.log("error saving in db", err);
    }
}
