const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const exphbs = require("express-handlebars")
const passport = require("passport")
const session = require("express-session")
const connectDB = require("./config/db")

//load config
dotenv.config({ path: "./config/config.env" })

require("./config/passport")(passport)

//connect db
connectDB()

const app = express()
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// Configure Express Handlebars
app.engine(".hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", ".hbs")

//session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Static folder
app.use(express.static(path.join(__dirname, "public")))

//routes
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))

const PORT = process.env.PORT || 5000
const HOSTNAME = process.env.HOST || "localhost" // Replace with your desired hostname

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on http://${HOSTNAME}:${PORT}`
  )
)
