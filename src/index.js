const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').create({
  
  defaultLayout: 'main',
  
  extname: '.hbs'
  
});
const route = require('./routes')


const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//http loger
// app.use(morgan('combined'));
//template engine
app.engine('hbs', handlebars.engine);
!
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));




//route
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})