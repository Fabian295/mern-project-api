// @description   Register new user
// @route         POST /api/users
// @access        Public
const registerUser = (req, res) => {
  res.status(200).json({message: 'Register user'})
}

// @description   Authenticate user
// @route         POST /api/users/login
// @access        Public
const loginUser = (req, res) => {
  res.json({message: 'Log User'})
}

// @description   Get user ddata
// @route         POST /api/users/me
// @access        Public
const getMe = (req, res) => {
  res.json({message: 'User data display6'})
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}