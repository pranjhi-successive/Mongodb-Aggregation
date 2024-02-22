import express from "express";

import aRouter from "../modules/routes";

const router = express.Router();
router.use("/aggregate", aRouter);

export default router;
