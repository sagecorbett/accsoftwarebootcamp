const express = require('express');
const app = express();
const path = require('path')
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()



app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());


// FOR HOME PAGE CONTACT
app.post('/contact', (req, res) => {
    const { name, subject, message, syllabus, phone, email } = req.body;
    // MAIL OBJECT INFO
    let mailOptions = {
        from: `CONTACT: ${name}`,
        to: 'softwareBootcampACC@gmail.com',
        subject: `ACC Website: ${subject}`,
        html: `
        <h1>MESSAGE:</h1>
        <p>${message}</p>
        <h2>DO THEY WANT A SYLLABUS?</h2>
        <p>${syllabus ? 'Yes I would like a syllabus' : 'Do not send a syllabus'}</p>
        <h2>CONTACT INFO:</h2>
        <ul>
            <li>NAME: ${name}</li>
            <li>PHONE: ${phone}</li>
            <li>EMAIL: ${email}</li>
        </ul>
        `
    }

    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        res.status(200).json('email sent');
        smtpTransport.close();
    });
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log('App listening on Port: ', port)
})
