import { Link } from "react-router-dom";
import { useState } from "react";
import "./login.css";
function LoginPage() {
  const [pass, setPass] = useState("");
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    let fail = document.getElementById("fail");
    if (pass === import.meta.env.VITE_SECRET) {
      setSuccess(true);
      fail.style.display = "block";
    } else {
      setSuccess(false);
      fail.style.display = "block";
    }
  };
  return (
    <>
      <main className="login-page">
        <div className="input-wrapper">
          <h1 className="top-label">Enter the numbers that got you here</h1>
          <input
            placeholder="The Code"
            type="text"
            className="pass-input"
            onChange={(e) => setPass(e.target.value)}
          />
          <button className="submit-button" onClick={handleClick}>
            Submit
          </button>
        </div>
      </main>
      {success ? (
        <p className="success-text">
          Congratulations!!
          <br />
          Brx pdgh lw Rqh odvw vwhs dqg brx’oo eh wkurxjk Wkh Fkdlu dqg Ylfh
          Fkdlu dzdlw brx
          <br />
          <br />
          &#40;the developer of this site loves Caesar salad with 3 batli of
          vodka&#41;
        </p>
      ) : (
        <p className="fail-text" style={{ display: "none" }} id="fail">
          Not the right code. Try again :&#40;
        </p>
      )}
    </>
  );
}

export default LoginPage;
