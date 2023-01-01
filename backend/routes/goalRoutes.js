const express =require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

// Verbose way,  but a bit more clear
router.get('/', getGoals)

router.post('/', setGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

/**
 * Shorter way, but a bit less clear
 * 
 *      router.route('/').get(protect, getGoals).post(protect, setGoal)
 *      router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)
 */

module.exports = router;