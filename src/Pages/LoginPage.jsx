import { useState } from "react";
import "../components/login-page/login-page.css";
import Footer from "../components/Footer";

const LoginPage = () => {
  //code for setting username and password
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  //use useContext for the global states !!!
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const LOGIN_URL = "https://bevisible-backend.herokuapp.com/user/signin";
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
        setUserId(data.id);
        setToken(data.accessToken);
        //then , navigate to dashboard here
        //once the router is set up
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
          <a className="active" href="#">
            Login
          </a>
          <a href="#">Register</a>
        </div>
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
