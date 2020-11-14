// const { fetchUserByIdFromDb } = require('../model/userOrm');
const nodemailer = require('nodemailer');
const emailTest = require('../templates/welcomeEmail.js');


async function main(template, userEmail) {
    console.log(process.env.YAHOO_PASS);
  // console.log(emailTest());
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    // console.log(process.env.YAHOO_PASS);
    // console.log(emailTest());
    let transporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: "passifyteam@yahoo.com", // generated ethereal user
        pass: process.env.YAHOO_PASS, // generated ethereal password
      },
    });

    // send mail with defined transport object
    try {
    let info = await transporter.sendMail({
      from: '"Passify" <passifyteam@yahoo.com>', // sender address
      to: userEmail, // list of receivers
      subject: "Welcome to the Passify Family", // Subject line
      html: template, // html body
    });
    console.log(info);
  }
  catch (e) {
    console.log(e);
  }

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  // used for testing welcome email:
  // main(emailTest, 'asegre18@cmc.edu').catch(console.error);

  module.exports = main;
