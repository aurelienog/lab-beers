module.exports.randomBeer = (req, res) => {
  fetch("https://ih-beers-api2.herokuapp.com/beers/random")
    .then(response => response.json())
    .then(responseFromAPI => {
      console.log(responseFromAPI )
      res.render('random-beer', { beer : responseFromAPI });
    })
    .catch(error => console.log(error));
  
};