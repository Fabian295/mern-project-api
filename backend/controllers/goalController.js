const asyncHandler = require('express-async-handler')

// @description   Get goal
// @route         GET /api/goals
// @access        Private 
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get Goals via function in controller!'})
})

// @description   Set goal
// @route         POST /api/goals
// @access        Private 
const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    // res.status(400).json({message: 'Plese add a text field!'})
    res.status(400)

    throw new Error('Please add a text field!');
  }

    res.status(200).json({message: `POST, via function in controller! Set your goals`})
  })

// @description   Update goal
// @route         PUT /api/goals/:id
// @access        Private 
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `PUT, via function in controller! Updated your goal ${req.params.id}`})
  })

// @description   Delete goal
// @route         DELETE /api/goals/:id
// @access        Private 
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `DELETE, via function in controller! Deleted your goal ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}