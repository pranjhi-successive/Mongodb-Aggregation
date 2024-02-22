import express from "express";
import Controller from "./Controller";
import Database from "../lib/Database";
import { serverConfig } from "../config";
const aRouter = express.Router();
const database=new Database(serverConfig.mongoUrl)
const controller = new Controller();

aRouter.get("/error", controller.complianceError);

aRouter.get("/stat", controller.complianceStat);
aRouter.get("/connectionCheck", controller.checkConnections);
aRouter.get('/disconnect/:connectionID', controller.close);



export default aRouter;
