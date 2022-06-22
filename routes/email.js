const { Router } = require("express");
const sendEmail = require("../controllers/email");

const router = Router();

router.post("/send_email", sendEmail);

module.exports = router;
