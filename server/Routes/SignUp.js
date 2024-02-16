let express = require("express");
require("../dbconfig");
let SignUp = require("../Models/SignUpModel");
let app = express();
let signRouter = express.Router();

app.use(express.json());

signRouter.post("/", async (req, res) => {
  let user = new SignUp(req.body);
  let result = await user.save();
  res.send(result);
});

module.exports = signRouter;
