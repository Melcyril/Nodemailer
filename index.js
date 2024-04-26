const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'monadresse@outlook.fr', // votre adresse e-mail
        pass: 'MotDePasse' // votre mot de passe (il vaut mieu utiliser une variable d'environnement)
    },
    tls: {
        rejectUnauthorized: false
    }
});

let mailOptions = {
    from: 'monadresse@outlook.fr', // adresse e-mail de l'expéditeur
    to: 'myFriend@live.fr', // liste des destinataires
    subject: 'Bonjour', // Ligne de sujet
    text: 'Bonjour my friend !', // corps du texte en texte brut
    html: '<b>Comment ça va</b>' // corps du texte en HTML
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message envoyé: %s', info.messageId);
});
