const express =require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: "From the router. Get your goals"})
})

module.exports = router;