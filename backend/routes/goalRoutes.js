const express =require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

// Verbose way,  but a bit more clear
router.get('/', protect, getGoals)

router.post('/', protect, setGoal)

router.put('/:id', protect, updateGoal)

router.delete('/:id', protect, deleteGoal)

/**
 * Shorter way, but a bit less clear
 * 
 *      router.route('/').get(protect, getGoals).post(protect, setGoal)
 *      router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)
 */

module.exports = router;