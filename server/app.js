let express = require("express");
let cors = require("cors")
require('./dbconfig');
let signRouter=require('./Routes/SignUp')
const { sendOTPByEmail, generateOTP } = require('./NodeMailer');
const bodyParser = require('body-parser');
let app=express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/register', async(req, res) => {
    const {email} = req.body.email;  
    const otp = generateOTP();
    try {
        await sendOTPByEmail(email, otp);
    
        res.json({ message: 'OTP sent successfully', otp });
      } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ error: 'Failed to send OTP' });
      }
  });

app.use('/sign/',signRouter);
app.listen(5000);