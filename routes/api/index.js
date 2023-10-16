router.get('/', function(req, res, next) {
    // Use Express's req.query object to 
    // access query parameters
    const username = req.query.username;
    // If this is not a "search",
    // just render the index view
    if (!username) return res.render('index', {userData: null});
    // Temporarily, we'll pass the token
    // in a querystring
    fetch(`${ROOT_URL}/users/${username}?access_token=${token}`)
      // fetch() returned a promise that 
      // resolves to a response object
      .then(res => res.json())
      // To access the data received from the API,
      // we've called the response object's
      // .json() method which resolves to the data...
      .then(userData => {
        res.render('index', { userData });
      });
  });