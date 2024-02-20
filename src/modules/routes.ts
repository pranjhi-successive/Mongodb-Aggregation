import express from "express";
import errorModel from "./complianaceError/model";
import logger from "../lib/logger";
import { statModel } from "./complianceStat/model";
const aRouter = express.Router();
aRouter.use(express.json());
aRouter.get("/error", async (req, res) => {
  try {
    let filters = {};
    let groupBy = null;
    let projection = null;

    Object.entries(req.query).forEach((item) => {
      filters = {
        ...filters,
        [item[0]]: JSON.parse(item[1] as string),
      };
    });
    Object.entries(req.headers).forEach((item) => {
      if (item[0] === "groupby") {
        groupBy = JSON.parse(item[1] as string);
      } else if (item[0] === "projection") {
        projection = JSON.parse(item[1] as string);
      }
    });

    const pipeline = [];

    if (Object.keys(filters).length > 0) {
      pipeline.push({ $match: filters });
    }
    if (groupBy !== null) {
      pipeline.push({ $group: groupBy });
    }
    if (projection !== null) {
      pipeline.push({ $project: projection });
    }

    const result = await errorModel.aggregate(pipeline);
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    logger.error("Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

aRouter.get("/stat", async (req, res) => {
  try {
    let filters = {};
    let groupBy = null;
    let projection = null;

    Object.entries(req.query).forEach((item) => {
      filters = {
        ...filters,
        [item[0]]: JSON.parse(item[1] as string),
      };
    });
    Object.entries(req.headers).forEach((item) => {
      if (item[0] === "groupby") {
        groupBy = JSON.parse(item[1] as string);
      } else if (item[0] === "projection") {
        projection = JSON.parse(item[1] as string);
      }
    });

    const pipeline = [];

    if (Object.keys(filters).length > 0) {
      pipeline.push({ $match: filters });
    }
    if (groupBy !== null) {
      pipeline.push({ $group: groupBy });
    }
    if (projection !== null) {
      pipeline.push({ $project: projection });
    }

    const result = await statModel.aggregate(pipeline);
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    logger.error("Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default aRouter;
