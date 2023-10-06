import React from 'react'

function Navbar() {
  return (
    // {/* navbar start */}
    <nav className="py-2 px-lg-5  px-1 d-flex justify-content-between">
    <div className="brandName ms-lg-5">
      <img src="/brandLogo.png" />
    </div>
    <div className="my-auto me-lg-5 d-flex">
      <input className="form-control me-2" placeholder="Find Friends" style={{ width: "300px" }} />
      <h3 className="my-auto mx-2 text-light icon">
        <i className="fa fa-heart"></i>
      </h3>
      <h3 className="my-auto text-light">
        <i className=" fa fa-bell"></i>
      </h3>
    </div>
  </nav>
//   {/* navbar end */}
  )
}

export default Navbar