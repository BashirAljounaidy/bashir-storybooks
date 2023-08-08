const path = require("path")
const express = require("express")
const mongoose = require("mongoose") 
const dotenv = require("dotenv")
const morgan = require("morgan")
const exphbs = require("express-handlebars")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session) //session store 
const connectDB = require("./config/db")


//load config
dotenv.config({ path: "./config/config.env" })

require("./config/passport")(passport)

//connect db
connectDB()

//
const app = express()

//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// Configure Express Handlebars
app.engine(".hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", ".hbs")

//session
const mongoStoreInstance = new MongoStore({ mongooseConnection: require('mongoose').connection })

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: mongoStoreInstance,
  })
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session({ 
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:false,
  store: new MongoStore({ mongooseConnection: require('mongoose').connection })
}))

//Static folder
app.use(express.static(path.join(__dirname, "public")))

//routes
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))
app.use("/stories", require("./routes/stories"))


const PORT = process.env.PORT || 5000
const HOSTNAME = process.env.HOST || "localhost" // Replace with your desired hostname

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on http://${HOSTNAME}:${PORT}`
  )
)
