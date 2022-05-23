import { useState } from "react";
import "../components/login-page/login-page.css";
import Input from "../components/ui_comp/Input";
import Footer from "../components/Footer";

const LoginPage = () => {
  const handleChange = (data) => {
    console.log(data);
  };
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <Input
              title={"Email"}
              placeholder={"johndoe@mail.com"}
              icon={2}
              type={"email"}
              handleChange={handleChange}
            />
            <Input
              title={"Login Password"}
              placeholder={"Password"}
              icon={3}
              type={"password"}
              handleChange={handleChange}
            />
            <input
              type="checkbox"
              name="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox"> Remember me</label>
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
