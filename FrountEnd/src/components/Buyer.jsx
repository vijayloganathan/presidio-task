import React from "react";
import { Link } from "react-router-dom";

export default function Buyer() {
  return (
    <div className="container-fluid  ">
      <div className="row">
        <div className="col-md-12 bg-primary d-flex justify-content-between p-2">
          <p className="font-italic h2 text-light font-weight-bold">
            Buyer Page of Precidio Task
          </p>

          <Link
            to="/"
            className="btn btn-danger font-italic font-weight-bold h4 ml-auto"
          >
            Logout
          </Link>
        </div>
        <div
          className="col-md-12 p-4 "
          style={{ overflowY: "scroll", maxHeight: "90vh" }}
        >
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 bg-light text-dark text-center m-3 p-2 h4">
              <p>Place : Salem</p>
              <p>Area : 4-Roads</p>
              <p>House Type : 2BHK</p>
              <p>Near Propertys : Hospital,School</p>
              <button className="btn btn-block btn-primary mr-1">
                View Details
              </button>
            </div>
            <div className="col-md-3 bg-light text-dark text-center m-3 p-2 h4">
              <p>Place : Salem</p>
              <p>Area : 4-Roads</p>
              <p>House Type : 2BHK</p>
              <p>Near Propertys : Hospital,School</p>

              <button className="btn btn-block btn-primary mr-1">
                View Details
              </button>
            </div>
            <div className="col-md-3 bg-light text-dark text-center m-3 p-2 h4">
              <p>Place : Salem</p>
              <p>Area : 4-Roads</p>
              <p>House Type : 2BHK</p>
              <p>Near Propertys : Hospital,School</p>

              <button className="btn btn-block btn-primary mr-1">
                View Details
              </button>
            </div>
            <div className="col-md-3 bg-light text-dark text-center m-3 p-2 h4">
              <p>Place : Salem</p>
              <p>Area : 4-Roads</p>
              <p>House Type : 2BHK</p>
              <p>Near Propertys : Hospital,School</p>

              <button className="btn btn-block btn-primary mr-1">
                View Details
              </button>
            </div>
            <div className="col-md-3 bg-light text-dark text-center m-3 p-2 h4">
              <p>Place : Salem</p>
              <p>Area : 4-Roads</p>
              <p>House Type : 2BHK</p>
              <p>Near Propertys : Hospital,School</p>

              <button className="btn btn-block btn-primary mr-1">
                View Details
              </button>
            </div>
            <div className="col-md-3 bg-light text-dark text-center m-3 p-2 h4">
              <p>Place : Salem</p>
              <p>Area : 4-Roads</p>
              <p>House Type : 2BHK</p>
              <p>Near Propertys : Hospital,School</p>

              <button className="btn btn-block btn-primary mr-1">
                View Details
              </button>
            </div>
            <div className="col-md-3 bg-light text-dark text-center m-3 p-2 h4">
              <p>Place : Salem</p>
              <p>Area : 4-Roads</p>
              <p>House Type : 2BHK</p>
              <p>Near Propertys : Hospital,School</p>

              <button className="btn btn-block btn-primary mr-1">
                View Details
              </button>
            </div>
            <div className="col-md-3 bg-light text-dark text-center m-3 p-2 h4">
              <p>Place : Salem</p>
              <p>Area : 4-Roads</p>
              <p>House Type : 2BHK</p>
              <p>Near Propertys : Hospital,School</p>

              <button className="btn btn-block btn-primary mr-1">
                View Details
              </button>
            </div>
          </div>

          <div className="col-md-5"></div>
        </div>
      </div>
    </div>
  );
}
