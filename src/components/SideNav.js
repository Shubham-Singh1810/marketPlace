import React from "react";
import {Link, useNavigate, useLocation} from "react-router-dom"
function SideNav() {
  return (
    <div className="col-lg-3 ">
      <div className="   profileCard me-2 shadow-lg rounded p-3">
        <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
        <h5 className="mb-2">Shubham Singh</h5>
        <div className="d-flex justify-content-between px-5 mb-2">
          <div>
            <p className="mb-0">0</p>
            <h6>Post</h6>
          </div>
          <div>
            <p className="mb-0">0</p>
            <h6>Friends</h6>
          </div>
        </div>
       <button className="btn btn-primary w-100">View Profile</button>
        
      </div>
      <div className=" mt-5 profileCard shadow-lg rounded sideNav " style={{ height: "300px" }}>
        <h2 className="py-2">VK18 Clab</h2>
          <Link to="/">
        <p className="mb-1">
          <i className="fa fa-home"></i>
          <span>Home</span>
          
        </p>
          </Link>
          <Link to="/explore">
        <p className="mb-1">
          <i className="fa fa-search"></i>
          <span>Explore</span>
          
        </p>
          </Link>
       <Link>
        <p className="mb-1">
       <i className="fa fa-plus"></i>
          <span>Create</span>
       
          
          
        </p>
       </Link>
          <Link>
        <p className="mb-1">
          <i className="fa fa-sign-out"></i>
          <span>Log Out</span>
          
        </p>
          </Link>
      </div>
    </div>
  );
}

export default SideNav;
