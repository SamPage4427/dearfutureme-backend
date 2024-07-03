import user from "./user";
import letters from "./letters";
import notes from "./notes";

const router = require("express").Router();

router.use("/user");
router.use("/letters");
router.use("/notes");

router.post("/signup");
router.post("/signin");

module.exports = router;
