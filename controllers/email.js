const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { to, message, subject } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "pruebasemailco@gmail.com",
      pass: "bgyxgnbtxxkxazxh",
    },
    secure: true,
  });

  const mailOptions = {
    from: "Proyecto Ing. Software",
    to,
    html: message,
    subject,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Por favor hable con el administrador",
      });
    } else {
      res.status(200).json({
        ok: true,
        info,
      });
    }
  });
};

module.exports = sendEmail;
