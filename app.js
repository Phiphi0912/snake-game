const express = require('express')
const exphbs = require('express-handlebars')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = process.env.PORT

const routes = require('./routes/index')

app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'hbs');

app.use(routes)

app.listen(port, () => {
  console.log(`running on the http://localhost:${port}`)
})
