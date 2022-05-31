import { useState, useRef, useContext } from "react";
import { userContext } from "../context";
import "../components/login-page/login-page.css";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  //code for setting username and password
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  //state for error messages
  const errRef = useRef("");
  const [errMsg, setErrMsg] = useState("");
  //for remember me button
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  //navigate after a fetch
  const navigate = useNavigate();
  //useContext for user id and token
  const { userId, setUserId, token, setToken } = useContext(userContext);
  const LOGIN_URL = "https://bevisible-backend.herokuapp.com/user/signin";

  //fetch on form submit to log in
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        //change coach to email after you can register with an email
        email: email,
        password: pwd,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.id && data.accessToken) {
          console.log("succes");
          setUserId(data.id);
          setToken(data.accessToken);
          //setErrMsg("Login sucessful");
          setTimeout(() => {
            navigate("/students", { replace: true });
          }, "250");
        } else {
          console.log("fail");
          if (data.message) {
            setErrMsg(data.message);
          }
        }
      })
      .catch(() => {
        setErrMsg("problems connecting to server");
      });
  };

  return (
    <div className="body-container center column">
      <div className="center column content">
        <h1 className="login-h1">BeVisible</h1>
        <h3 className="login-h3">
          By signing in, you agree to our{" "}
          <span>Term and privacy of policy</span>
        </h3>
        <div className="link-container">
          <Link to="/" className="active">
            Login
          </Link>
          <Link to="register">Register</Link>
        </div>
        <p ref={errRef} className="margin-p poppup">
          {errMsg}
        </p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <input
                type="email"
                name="username"
                placeholder="johndoe@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="***********"
                onChange={(e) => setPwd(e.target.value)}
                required
              />
              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={checked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="checkbox"> Remember me</label>
              </div>
            </div>

            <div className="center">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer position={"absolute"} />
    </div>
  );
};

export default LoginPage;
