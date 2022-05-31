const express = require("express");
const router = express.Router();
const { First, Second, Third, Fourth } = require("../models");
const sequelize = require("sequelize");

router.get("/hanryang1125/:date", async (req, res) => {
  try {
    const streaminfoData = await First.findAll({
      where: {
        createdAt: req.params.date,
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
    if ((dataList = [])) {
      dataList.push(streaminfoData[0]);
    }
    for (let i = 1; i < streaminfoData.length; i++) {
      if (
        (await streaminfoData[i - 1].category) !==
          (await streaminfoData[i].category) ||
        (await streaminfoData[i - 1].title) !== (await streaminfoData[i].title)
      ) {
        dataList.push(streaminfoData[i]);
      }
    }
    console.log(dataList);

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
        createdAt: req.params.date,
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
    if ((dataList = [])) {
      dataList.push(streaminfoData[0]);
    }
    for (let i = 1; i < streaminfoData.length; i++) {
      if (
        (await streaminfoData[i - 1].category) !==
          (await streaminfoData[i].category) ||
        (await streaminfoData[i - 1].title) !== (await streaminfoData[i].title)
      ) {
        dataList.push(streaminfoData[i]);
      }
    }
    console.log(dataList);

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
        createdAt: req.params.date,
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
    if ((dataList = [])) {
      dataList.push(streaminfoData[0]);
    }
    for (let i = 1; i < streaminfoData.length; i++) {
      if (
        (await streaminfoData[i - 1].category) !==
          (await streaminfoData[i].category) ||
        (await streaminfoData[i - 1].title) !== (await streaminfoData[i].title)
      ) {
        dataList.push(streaminfoData[i]);
      }
    }
    console.log(dataList);

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
        createdAt: req.params.date,
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
    if ((dataList = [])) {
      dataList.push(streaminfoData[0]);
    }
    for (let i = 1; i < streaminfoData.length; i++) {
      if (
        (await streaminfoData[i - 1].category) !==
          (await streaminfoData[i].category) ||
        (await streaminfoData[i - 1].title) !== (await streaminfoData[i].title)
      ) {
        dataList.push(streaminfoData[i]);
      }
    }
    console.log(dataList);

    res.status(200).json(dataList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
