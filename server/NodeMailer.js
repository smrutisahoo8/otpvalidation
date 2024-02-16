const nodemailer = require('nodemailer');


const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOTPByEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'srsahoo860@gmail.com',
      pass: 'qikj ayhc cayv hekz',
    },
  });

 
  const mailOptions = {
    from: 'srsahoo860@gmail.com',
    to: email,
    subject: 'Your OTP for Verification',
    text: `Your OTP is: ${otp}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully!');
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};

module.exports = { sendOTPByEmail, generateOTP };