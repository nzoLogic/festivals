let db = require('./db')
let festivals = [{
        name: "Coachella",
        location: "Indio, CA",
        date: "Apr 14 - Apr 23",
        image: "https://coachella-2014-site.s3.amazonaws.com/wp-content/uploads/2013/10/03102627/c17_1200x630.jpg"
    },
    {
        name: "Electric Forrest",
        location: "Grand Township, MA",
        date: "Jun 22 - July 2",
        image: "https://www.electricforestfestival.com/wp-content/themes/electricforest/images/share.png?v=2"
    },
    {
        name: "EDC Las Vegas",
        location: "Electric Daisy Carnival, NV",
        date: "June 16 - June 18",
        image: "http://www.frontgatetickets.com/wp-content/uploads/2016/03/edc_las_vegas_2017_misc_front_gate_assets_portal_banner_2426x1365_r01.jpg"
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
