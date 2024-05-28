import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import bgimage from "../assets/bg.png";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    number: "",
    user: "", // Added for radio button value
  });

  const handleChange = (event) => {
    if (event.target.type === "radio") {
      setValues({ ...values, user: event.target.value });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://presidio-task-1.onrender.com/Create", values)
      .then((res) => {
        alert("Registered Successfully");
        setValues({
          fname: "",
          lname: "",
          email: "",
          password: "",
          number: "",
          user: "",
        });
        document.getElementById("registerform").reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid pt-5">
      <p className="h1 font-italic text-center">PRESIDIO TASK</p>
      <div className="row d-flex align-items-center">
        <div className="col-md-6 col-12 align-self-center">
          <img src={bgimage} alt="Background" className="img-fluid" />
        </div>
        <div className="col-md-6 col-12">
          <div className="d-flex justify-content-center">
            <div className="col-10 align-self-center">
              <p className="h3 font-italic text-primary text-center">
                Register User
              </p>
              <form onSubmit={handleSubmit} id="registerform">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="First_Name">First Name</label>
                    <input
                      type="text"
                      className="form-control transparent-textbox"
                      id="First_Name"
                      onChange={handleChange}
                      name="fname"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="Last_Name">Last Name</label>
                    <input
                      type="text"
                      className="form-control transparent-textbox"
                      id="Last_Name"
                      onChange={handleChange}
                      name="lname"
                      required
                    />
                  </div>
                </div>
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
                    <label htmlFor="Email">password</label>
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
                    <label htmlFor="Phone_Number">Phone Number</label>
                    <input
                      type="number"
                      className="form-control transparent-textbox"
                      id="Phone_Number"
                      onChange={handleChange}
                      name="number"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Category</label>
                    <div>
                      <div className="form-check form-check-inline col-5">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="category"
                          id="Seller"
                          value="Seller"
                          onChange={handleChange} // Added onChange event
                          required
                        />
                        <label className="form-check-label" htmlFor="Seller">
                          Seller
                        </label>
                      </div>
                      <div className="form-check form-check-inline col-5">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="category"
                          id="Buyer"
                          value="Buyer"
                          onChange={handleChange} // Added onChange event
                          required
                        />
                        <label className="form-check-label" htmlFor="Buyer">
                          Buyer
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <button type="submit" className="btn btn-primary btn-block">
                      Submit
                    </button>
                  </div>
                  <Link to="/" className="font-italic text-primary h5">
                    Back to Login
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
