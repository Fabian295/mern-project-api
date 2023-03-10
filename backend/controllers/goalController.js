const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')


// @description   Get goal
// @route         GET /api/goals
// @access        Private 
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })

  // res.status(200).json({message: 'Get Goals via function in controller!'})
  res.status(200).json(goals)
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

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  }) 

    // res.status(200).json({message: `POST, via function in controller! Set your goals`})
    res.status(200).json(goal)
  })

// @description   Update goal
// @route         PUT /api/goals/:id
// @access        Private 
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found!')
  }

  /****** No need to find the user, only need the id, can do that
   * in the next 'if(statement)'
  const user = await User.findById(req.user.id)
 *****************/


  /***********
   Check for user, with req object
   * NO
   // if (!user) {

   * YES
   * if (! req.user) {}
 ***********************************/

   if (!req.user) {
  res.status(400)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

    // res.status(200).json({message: `PUT, via function in controller! Updated your goal ${req.params.id}`})
    res.status(200).json(updatedGoal)
  })

// @description   Delete goal
// @route         DELETE /api/goals/:id
// @access        Private 
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found!')
  }
  /****** No need to find the user, only need the id, can do that
   * in the next 'if(statement)'
  const user = await User.findById(req.user.id)
 *****************/


  /***********
   Check for user, with req object
   * NO
   // if (!user) {

   * YES
   * if (! req.user) {}
 ***********************************/

  // Check for user, just like in the update
  if (!req.user) {
    res.status(400)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await Goal.findByIdAndDelete(goal);

  /******************   OR you can use the remove method *************
   *    goal.remove()
   *******************************************************************/

  /***** This res() is for in the early stages testing with Postman 
   * 
   res.status(200).json({message: `DELETE, via function in controller! Deleted your goal ${req.params.id}`})
   * 
  **************/

  res.status(200).json({id: req.params.id, message: `The goal with this id ${req.params.id} was just deleted!`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}