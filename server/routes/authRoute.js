const { signUp, login } = require("../controllers/authController");
const { userVerification } = require("../middlewares/authMiddleware");
const router = require("express").Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/", userVerification);

module.exports = router;
