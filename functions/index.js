const functions = require('firebase-functions');
const cors = require('cors')({
  origin: true,
});

var express = require('express'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

exports.httpEmail = functions.https.onRequest((req, res) => {

  return cors(req, res, () => {

    app.post('/send-email', function (req, res) {

      let transporter = nodeMailer.createTransport({
          host: 'mail.exchangevenus.com',
          port: 587,
          secure: true,
          auth: {
              user: 'Vladimir@exchangevenus.com',
              pass: 'HalifaxR2R'
          }
      });
    
      let mailOptions = {
          from: 'V K <xx@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
      });
    
    });

  });

})










