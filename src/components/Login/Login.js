import "./Login.css";
import firebase from "firebase";
import { auth } from "../../firebase";
import { useState } from "react";
import { useHistory } from "react-router";

function Login() {
  const [number, setNumber] = useState("");
  const history = useHistory();

  const handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");

    auth.signInWithPhoneNumber(number, recaptcha).then((e) => {
      let code = prompt("Enter the OTP -");
      if (code === null) {
        return;
      }
      e.confirm(code)
        .then((result) => {
          history.push("/home");
        })
        .catch((err) => alert(err.message));
    });
  };

  return (
    <div className="input">
      <div id="recaptcha-container"></div>
      <div style={{ height: 10 }} />
      <input
        className="input__input"
        type="text"
        placeholder="Enter your number in international format"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="input__button" onClick={handleClick}>
        Click here
      </button>
    </div>
  );
}

export default Login;
