/* eslint-disable no-console */
import { type Request, type Response } from "express";
import logger from "../lib/logger";
import errorModel from "./complianaceError/model";
import Database from "../lib/Database";
import { serverConfig } from "../config";
import { statModel } from "./complianceStat/model";
import mongoose from "mongoose";

class Controller {
  private readonly database: Database;
  connections: { [id: string]: any } = {};

  constructor() {
    this.database = new Database(serverConfig.mongoUrl);
  }
  close = async (req: Request, res: Response) => {
    const connectionID = req.params.connectionID;
    if (!connectionID) {
      return res.status(400).send("ConnectionID is required.");
    }

    try {
      await this.database.disconnectConnection(connectionID);

      res
        .status(200)
        .json({ message: `Connection ${connectionID} disconnected.` });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  checkConnections = async (req: Request, res: Response) => {
    var openConnections = mongoose.connections.filter(
      (op) => op.readyState === 1,
    );
    var closedConnections = mongoose.connections.filter(
      (op) => op.readyState === 0,
    );
    res.status(200).json({
      success: true,
      open: openConnections.length,
      close: closedConnections.length,
    });

    console.log("open", openConnections.length);
    console.log("close", closedConnections.length);
  };

  complianceError = async (req: Request, res: Response) => {
    try {
      await this.database.connect();
      await this.database.checkConnections();
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
      console.log(pipeline);

      const result = await errorModel.aggregate(pipeline);
      await this.database.disconnect();
      res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      logger.error("Error:", error);
      await this.database.disconnect();

      res.status(500).json({ success: false, error: error.message });
    }
  };
  complianceStat = async (req: Request, res: Response) => {
    try {
      console.log('Reached in controller');
      await this.database.connect();
      await this.database.checkConnections();
      let filters = {};
      let groupBy = null;
      let projection = null;
      console.log("headersssssssssssss",req.headers)

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
      console.log(pipeline);

      const result = await statModel.aggregate(pipeline);
      console.log(result);
      await this.database.disconnect();
      res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      logger.error("Error:", error);
      await this.database.disconnect();

      res.status(500).json({ success: false, error: error.message });
    }
  };
}
export default Controller;
