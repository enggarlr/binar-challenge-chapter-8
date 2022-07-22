const apiRouter = require("express").Router();
const v1 = require("./v1");

/**
 * @Routes "/api"
 * entrypoint for all API routes
 */

apiRouter.get("/", (req, res) => {
  res.send("test");
});

/**
 * @swagger
 * /api:
 *  get:
 *    summary: "Test the first entrypoint"
 *    description: ""
 *    content:
 *      application/json:
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: "OK"
 *        content:
 *          text/html:
 *            schema:
 *              type: string
 *      '304':
 *        description: "OK"
 *        content:
 *          text/html:
 *            schema:
 *              type: string
 */

apiRouter.use("/v1", v1);

module.exports = apiRouter;
