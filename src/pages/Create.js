import React from "react";
import SideNav from "../components/SideNav";

function Create() {
  return (
    <div className="col-lg-12 vh-100" style={{ position: "absolute", top: "0px", background: "rgba(0, 0, 0, 0.6)" }}>
      <div className="createPost p-3">
        <p className="d-flex justify-content-between mb-0">
          <b className="mb-1">Create</b>
          <i className=" mt-1 fa fa-close"></i>
        </p>
        <div className="postImgDiv mb-3 d-flex justify-content-center align-items-center  text-light ">Upload</div>
        <textarea className="form-control mb-2" placeholder="Caption this..." rows={3}/>
        <div className="d-flex my-2 justify-content-between">
          <button className="btn btn-primary">Create as Post</button>
          <button className="btn btn-warning">Add to story</button>
        </div>
      </div>
    </div>
  );
}

export default Create;
