import nodemailer from 'nodemailer';

export const sendMail = async (email,otp) =>{
    try {
      

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "erick.jacobi86@ethereal.email",
    pass: "57N1v2T7wjGGWtZFPn",
  },
});

// async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: `${email}`, // list of receivers
    subject: "Hello ✔", // Subject line
    html: `<b>${otp}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>








        
    } catch (error) {
        console.log(error.message);
        
        
    }
}