import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import bgimage from "../assets/bg.png";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://presidio-task-1.onrender.com/login", values)
      .then((res) => {
        const data = res.data.user;
        if (data == "Buyer") {
          document.getElementById("loginform").reset();
          navigate("/buyer");
        } else if (data == "Seller") {
          document.getElementById("loginform").reset();
          navigate("/seller");
        } else {
          alert("Mail ID or Password is Incorrect");
        }
        // Handle successful login (e.g., redirect to another page, store token, etc.)
      })
      .catch((err) => {
        console.log(err.response.data.message || "Login failed");
        // Handle login failure (e.g., show error message to user)
      });
  };

  return (
    <div className="container-fluid pt-5">
      <p className="h1 font-italic text-center">PRESIDIO TASK</p>
      <div className="row d-flex align-items-center">
        <div className="col-6 align-self-center">
          <img src={bgimage} alt="Background" className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center">
            <div className="col-10 align-self-center">
              <p className="h3 font-italic text-primary text-center">Login </p>
              <form onSubmit={handleSubmit} id="loginform">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      className="form-control transparent-textbox"
                      id="Email"
                      onChange={handleChange}
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control transparent-textbox"
                      id="password"
                      onChange={handleChange}
                      name="password"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                  <Link to="/register" className="font-italic text-primary h5">
                    New User ?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
