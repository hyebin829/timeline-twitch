const express = require("express");
const router = express.Router();
const { First, Second, Third, Fourth } = require("../models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");

router.get("/hanryang1125/:date", async (req, res) => {
  dayjs.extend(customParseFormat);

  try {
    console.log(dayjs(`${req.params.date} 09:00:00`).toDate());
    console.log(dayjs(`${req.params.date} 08:59:00`).add(1, "day").toDate());

    const streaminfoData = await First.findAll({
      where: {
        createdAt: {
          [Op.between]: [
            dayjs(`${req.params.date}`).toDate(),
            dayjs(`${req.params.date}`).add(1, "day").toDate(),
          ],
        },
      },
      attributes: [
        "category",
        "title",
        "updatedAt",
        [
          sequelize.fn("date_format", sequelize.col("createdAt"), `%H:%i`),
          "createdAt",
        ],
      ],
      raw: true,
    });
    let dataList = [];
    console.log(streaminfoData);
    if (streaminfoData) {
      for (let i = 0; i < streaminfoData.length; i++) {
        if (
          (await streaminfoData[i].category) !==
            (await streaminfoData[i + 1]?.category) ||
          (await streaminfoData[i].title) !==
            (await streaminfoData[i + 1]?.title)
        ) {
          dataList.push(streaminfoData[i]);
        }
      }
      console.log(dataList);
    }

    res.status(200).json(dataList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/zilioner/:date", async (req, res) => {
  try {
    const streaminfoData = await Second.findAll({
      where: {
        createdAt: {
          [Op.between]: [
            dayjs(`${req.params.date}`).toDate(),
            dayjs(`${req.params.date}`).add(1, "day").toDate(),
          ],
        },
      },
      attributes: [
        "category",
        "title",
        "updatedAt",
        [
          sequelize.fn("date_format", sequelize.col("createdAt"), `%H:%i`),
          "createdAt",
        ],
      ],
      raw: true,
    });

    let dataList = [];
    console.log(streaminfoData);

    if (streaminfoData) {
      for (let i = 0; i < streaminfoData.length; i++) {
        if (
          (await streaminfoData[i].category) !==
            (await streaminfoData[i + 1]?.category) ||
          (await streaminfoData[i].title) !==
            (await streaminfoData[i + 1]?.title)
        ) {
          dataList.push(streaminfoData[i]);
        }
      }
      console.log(dataList);
    }

    res.status(200).json(dataList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/rooftopcat99/:date", async (req, res) => {
  try {
    const streaminfoData = await Third.findAll({
      where: {
        createdAt: {
          [Op.between]: [
            dayjs(`${req.params.date}`).toDate(),
            dayjs(`${req.params.date}`).add(1, "day").toDate(),
          ],
        },
      },
      attributes: [
        "category",
        "title",
        "updatedAt",
        [
          sequelize.fn("date_format", sequelize.col("createdAt"), `%H:%i`),
          "createdAt",
        ],
      ],
      raw: true,
    });

    let dataList = [];
    if (streaminfoData) {
      for (let i = 0; i < streaminfoData.length; i++) {
        if (
          (await streaminfoData[i].category) !==
            (await streaminfoData[i + 1]?.category) ||
          (await streaminfoData[i].title) !==
            (await streaminfoData[i + 1]?.title)
        ) {
          dataList.push(streaminfoData[i]);
        }
      }
      console.log(dataList);
    }

    res.status(200).json(dataList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/109ace/:date", async (req, res) => {
  try {
    const streaminfoData = await Fourth.findAll({
      where: {
        createdAt: {
          [Op.between]: [
            dayjs(`${req.params.date}`).toDate(),
            dayjs(`${req.params.date}`).add(1, "day").toDate(),
          ],
        },
      },
      attributes: [
        "category",
        "title",
        "updatedAt",
        [
          sequelize.fn("date_format", sequelize.col("createdAt"), `%H:%i`),
          "createdAt",
        ],
      ],
      raw: true,
    });

    let dataList = [];
    if (streaminfoData) {
      for (let i = 0; i < streaminfoData.length; i++) {
        if (
          (await streaminfoData[i].category) !==
            (await streaminfoData[i + 1]?.category) ||
          (await streaminfoData[i].title) !==
            (await streaminfoData[i + 1]?.title)
        ) {
          dataList.push(streaminfoData[i]);
        }
      }
      console.log(dataList);
    }

    res.status(200).json(dataList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
