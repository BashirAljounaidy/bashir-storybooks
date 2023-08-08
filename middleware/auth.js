// This middleware will be used to protect routes that require authentication also to check if the user is logged in or not.
module.exports = {
  ensureAuth: function (req, res, next) { 
    if (req.isAuthenticated()) { 
      return next()
    } 
    res.redirect('/') 
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard')
    } else {
      return next()
    }
  }
}