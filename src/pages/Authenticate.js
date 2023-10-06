import {useState} from "react";

function Authenticate() {
    const[showSignIn, setShowSignIn] =useState(true)
  return (
    <div className="row p-0 authenticate">
      <div className="col-6 p-0 vh-100 d-flex justify-content-center align-items-center">
        <div className="signIn">
          <h1 className="mb-3">Sing In</h1>
          <div className="">
            <label className="form-label">Email*</label>
            <input className="form-control py-2 mb-3" />
            <label className="form-label">Password*</label>
            <input className="form-control py-2" />
            <br />
            <button className="btn btn-primary w-100 py-2">Sing In</button>
            <hr />
            <p className="text-center ">
              Don't have any Account ? <u className="text-primary" onClick={()=>setShowSignIn(false)}>Sign Up</u>
            </p>
          </div>
        </div>
      </div>
      <div className="col-6 p-0 vh-100 d-flex justify-content-center align-items-center">
        <div className="signIn">
          <h1 className="mb-3">Sing Up</h1>
          <div className="">
            <label className="form-label">User Name*</label>
            <input className="form-control py-2 mb-3" />
            <label className="form-label">Email*</label>
            <input className="form-control py-2 mb-3" />
            <label className="form-label ">Password*</label>
            <input className="form-control py-2" />
            <br />
            <button className="btn btn-primary w-100 py-2">Sing Up</button>
            <hr />
            <p className="text-center ">
            Have an Account ? <u className="text-primary" onClick={()=>setShowSignIn(true)}>Sign Up</u>
            </p>
          </div>
        </div>
      </div>
      <div className={"col-6 bg-danger viratBanner p-0 " + (showSignIn ? "moveRight" : "moveLeft")}>
             <img src="https://i.pinimg.com/originals/76/7f/87/767f8787f10ba9dad200bc180bb8dc27.jpg" style={{height:"100vh", width:"100%"}}/>
      </div>
    </div>
  );
}

export default Authenticate;
