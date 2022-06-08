const express = require("express");
const router = express.Router();
const { Fourth } = require("../models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");

router.get("/:id/:date", async (req, res) => {
  dayjs.extend(customParseFormat);
  dayjs.extend(utc);
  dayjs.extend(timezone);

  try {
    // console.log(
    //   dayjs(`${req.params.date}`).tz("Asia/Seoul").subtract(9, "hour")
    // );
    // console.log(dayjs());
    // console.log(dayjs().tz("Asia/Seoul"));

    const streaminfoData = await Fourth.findAll({
      where: {
        [Op.and]: [
          {
            createdAt: {
              [Op.between]: [
                dayjs(`${req.params.date}`)
                  .tz("Asia/Seoul")
                  .subtract(9, "hour")
                  .toDate(),
                dayjs(`${req.params.date}`)
                  .tz("Asia/Seoul")
                  .subtract(9, "hour")
                  .add(1, "day")
                  .toDate(),
              ],
            },
          },
          { streamerId: req.params.id },
        ],
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
    streaminfoData.unshift({ category: "temp", title: "temp" });

    for (let i = 1; i < streaminfoData.length; i++) {
      if (
        (await streaminfoData[i - 1].category) !==
          (await streaminfoData[i]?.category) ||
        (await streaminfoData[i - 1].title) !== (await streaminfoData[i]?.title)
      ) {
        dataList.push(streaminfoData[i]);
      }
    }

    res.status(200).json(dataList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
