const path=require('path')
const express = require('express')
const dotenv = require('dotenv')
const connectDB= require('./config/db')
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const passport = require('passport')
const session = require('express-session')

//load config
dotenv.config({ path: './config/config.env' })

require('./config/passport')(passport)
//connect db
connectDB()

const app = express()
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

// Configure Express Handlebars 
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs');

//session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Static folder

app.use(express.static(path.join(__dirname,'public')))
app.use('/',require('./routes/index'))


const PORT = process.env.PORT || 5000

app.listen(PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} on ${PORT}`)
  )
