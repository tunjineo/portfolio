var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
    	service: 'Gmail',
        secure: false,
        port:25,
    	auth: {
    		user: 'daden@gmail.com',
    		pass: 'something'
    	}
    });

    var mainOptions = {
    	from: 'John dye <tunjineo@gmail.com.com>',
    	to: 'daden@gmail.com',
    	subject: 'Websiet Submission',
    	text: 'you have a new Submissionwith the following details...Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.Message,
    	html: '<p>You got a new message with the following details..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.Message+'</li></ul>',
    };

    transporter.sendMail(mainOptions, function(error, info){
    	if(error){
    		console.log(error);
    		res.redirect('/')
    	} else{
    		console.log('Message Sent'+info.response);
    		res.redirect('/')
    	}
    });

});

module.exports = router;
