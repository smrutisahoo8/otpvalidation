import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAdditionalInput, setShowAdditionalInput] = useState({
    option1: false,
    option2: false,
  });
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setShowAdditionalInput({
      option1: selectedValue === "option1",
      option2: selectedValue === "option2",
    });
    if (selectedValue === "option2" && !otpSent) {
      handleEmailVerify();
    }
  };
  const handleEmailVerify = () => {
    axios
      .post("http://localhost:5000/register", { email })
      .then(() => {
        alert("OTP sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formSubmit = () => {
    axios
      .post("http://localhost:5000/sign", {
        username,
        email,
        phone,
        password,
        selectedOption,
      })
      .then(() => {
        alert("Account Created");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form">
              <form className="signup-from" onSubmit={formSubmit}>
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone No."
                    className="form-control"
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="null" hidden>
                      Sign Up Via
                    </option>
                    <option value="option1">Mobile Number</option>
                    <option value="option2">Email</option>
                  </select>
                </div>
                {showAdditionalInput.option1 && (
                  <div className="hidden">
                    <input type="text" name="otpmobile" placeholder="OTP" />
                    <button className="btn btn-success">Verify OTP</button>
                    <button className="btn btn-primary">Resend OTP</button>
                  </div>
                )}
                {showAdditionalInput.option2 && (
                  <div className="hidden">
                    <input type="text" name="otpemail" placeholder="OTP" />
                    <button
                      className="btn btn-success"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    >
                      Verify OTP
                    </button>
                    <button className="btn btn-primary">Resend OTP</button>
                  </div>
                )}
                <div className="clearfix"></div>
                <div className="signup">
                  <button className="btn btn-secondary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
