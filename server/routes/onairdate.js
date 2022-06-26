const express = require('express')
const router = express.Router()
const { Fourth } = require('../models')
const { Sequelize } = require('sequelize')
const dayjs = require('dayjs')

router.get('/:id', async (req, res) => {
  try {
    const dateArray = await Fourth.findAll({
      where: { streamerId: req.params.id },
      attributes: [Sequelize.fn('DISTINCT', Sequelize.col('startedAt')), 'startedAt'],
    })
    const onAirDate = dateArray.map((item) => dayjs(item.dataValues.startedAt).format('YYYY-MM-DD'))
    res.status(200).json(onAirDate)
  } catch (error) {}
})

module.exports = router
