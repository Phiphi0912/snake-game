const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

const routes = require('./routes/index')

app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'hbs');

app.use(routes)

app.listen(port, () => {
  console.log(`running on the http://localhost:${port}`)
})
