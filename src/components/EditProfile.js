import React from "react";
import SideNav from "./SideNav";
function EditProfile() {
  return (
    <div>
      <div className="row mx-lg-5 mt-2  px-lg-5 py-lg-4  py-0 px-0">
        <SideNav />

        {/* Search Result start */}
        <div className="col-lg-9">
          <div className="cover col-lg-12 d-flex justify-content-center align-items-center">
            <i className="fa fa-plus me-2"></i> Upload Cover
          </div>
          <div className="row my-5 d-flex justify-content-center">
            <div className="col-lg-4 profilePic d-flex justify-content-center align-items-center">
              <i className="fa fa-plus me-2"></i>Upload Profile{" "}
            </div>
            <div className="col-lg-8 ps-5 row">
              <div className="col-lg-6 mb-auto">
                <label>UserName*</label>
                <input className="form-control" />
              </div>
              <div className="col-lg-6 mb-auto">
                <label>Password*</label>
                <input className="form-control" />
              </div>
              <div className="col-lg-12 mb-auto">
                <label>Bio*</label>
                <textarea className="form-control" />
              </div>
            </div>
          </div>
          <button className="btn btn-primary w-100 ">Update</button>
        </div>
        {/* Search Result end */}
      </div>
    </div>
  );
}

export default EditProfile;
