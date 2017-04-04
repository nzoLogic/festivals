# [Festival Season!](https://github.com/nzoLogic/festivals)
(beta version)

Set out to learn ReactJS and with festival season upon us, what better way to celebrate than build a full MERN (Mongoose, Express, React, Node) application that displays some upcoming music festivals!

Server entry point is index.js which serves the React front-end through the 'client' directory.

If you cloned the repo, **you must have mongodb installed and running** then run npm start in the root directory in your terminal. That triggers concurrently to run the server and webpack client server.


### Technological Features

* MongoDB API returns JSON data
* Serving React front-end with Express Server
* Proxied front-end API requests with [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [Concurrently](https://www.npmjs.com/package/concurrently)
* [Semantic UI](https://semantic-ui.com/) for general styling
* Client side routing with **react-router-dom**

### API endpoints (local)
* GET "/api/festivals" returns all festivals in JSON format

* GET "/api/festivals/:name" takes in the festivals name as route paramater and returns single festival

### API endpoints (Heroku)
* GET "https://react-festivals.herokuapp.com/api/festivals" returns all festivals in JSON format

* GET "https://react-festivals.herokuapp.com/api/festivals/:name" takes in the festivals name as route paramater and returns single festival
