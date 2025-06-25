require ("dotenv").config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (msg) => {
    try {
        await sgMail.send(msg);
        console.log("Correo enviado de manera exitosa");
    } catch (error) {
        console.error(error);
        if (error.response){
            console.error(error.response.body);
        }
    }
}

sendMail(
    {
        to: "holamundo@hootmail.com",
        from: "holamundo@gmail.com",
        subject: "Envio de Correo con NODEJS y Sendgrid",
        text: "Prueba de Sendgrid y NODEJS para la clase"
    }
)
