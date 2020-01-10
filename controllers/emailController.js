const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: "joeco.me.contact@gmail.com",
      pass: "Ab123456!"
  }
});

exports.contactUsEmail = async (req, res, next) => {

  console.log(req.body);

  const name = req.body.cuName
  const email = req.body.cuEmail;
  const message = req.body.cuMessage; 
  
  let emailOption = {
      to: 'joeco.me.contact@gmail.com',
      subject: 'Resume Inquiry',
      text: email + "\n" + name + "\n" + message, 
  }

  await transporter.sendMail(emailOption, function(err, info) {

      if (err) {
          console.log(err);
      }
  });
}