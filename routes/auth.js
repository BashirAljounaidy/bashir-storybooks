const express = require("express")
const passport = require("passport")
const router = express.Router()

// @desc  Authen with Google
// @route GET /
router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

// @desc Google auth callback
// @route GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard")
  }
)
// @desc  logout 
// @route GET /auth/logout

router.get('/logout', (req, res, next) => {
  req.logout((error) => {
      if (error) {return next(error)}
      res.redirect('/')
  })
})

module.exports = router
