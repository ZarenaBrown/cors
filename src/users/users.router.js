const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

const corsGET = cors({methods: "GET"});

router
  .route("/:userId")
  .get(corsGET, controller.read)
  .options(corsGET)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(corsGET, controller.list)
  .options(corsGET)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
