const express = require('express');
const app = express();
const rp = require('request-promise');
const path = require('path')
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/:city', (req, res) => {
  rp({
    uri: 'http://dataservice.accuweather.com/locations/v1/cities/search',
    qs: {
      q: req.params.city,
      apikey: 'O3OB9pzeGd067tFhjHUbaNgXG50uVy08'
         // Use your accuweather API key here
    },
    json: true
  })
    .then((data) => {
      res.render('home',{
        "city":data[0]["LocalizedName"]
    })
  })
    .catch((err) => {
      console.log(err)
      res.render('error')
    })
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
