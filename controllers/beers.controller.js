module.exports.beers = (req, res) => {
  fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => response.json())
    .then(beersFromApi => {
      res.render('beers', { beersFromApi })
    })
    .catch(error => console.log(error))
  
};


