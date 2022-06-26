const express = require('express')
const router = express.Router()
const { Fourth } = require('../models')
const sequelize = require('sequelize')
const { Op } = require('sequelize')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
const timezone = require('dayjs/plugin/timezone')
const utc = require('dayjs/plugin/utc')

router.get('/:id/:date', async (req, res) => {
  dayjs.extend(customParseFormat)
  dayjs.extend(utc)
  dayjs.extend(timezone)

  try {
    const streaminfoData = await Fourth.findAll({
      where: {
        [Op.and]: [
          {
            createdAt: {
              [Op.between]: [
                dayjs(`${req.params.date}`).tz('Asia/Seoul').startOf('day').toDate(),
                dayjs(`${req.params.date}`).tz('Asia/Seoul').startOf('day').add(1, 'day').toDate(),
              ],
            },
          },
          { streamerId: req.params.id },
        ],
      },
      attributes: [
        'category',
        'title',
        'updatedAt',
        [sequelize.fn('date_format', sequelize.col('createdAt'), `%H:%i`), 'createdAt'],
      ],
      raw: true,
    })

    res.status(200).json(streaminfoData)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
