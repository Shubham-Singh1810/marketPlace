import React from "react";
import Post from "../components/Post";
import SearchPost from "../components/SearchPost";
import EditProfile from "../components/EditProfile";
function Profile() {
  return (
    <>
    <div className="row mx-lg-5 mt-2  px-lg-5 py-lg-4  py-0 px-0">
      <div className="profileHeader">
        <div className="cover ">
          <img
            src="https://akm-img-a-in.tosshub.com/sites/dailyo/story/header/201812/kohli-banner-header_122018111953.jpg"
            className="w-100"
            style={{ zIndex: "0", position: "relative", height: "300px" }}
          />
        </div>
        <div className="d-flex profileDetails justify-content-between">
          <div className=" px-4 d-flex">
            <img
              src="https://tse3.explicit.bing.net/th?id=OIP.ZhqnB_m_0VYLAHxFTke6ogHaEz&pid=Api&P=0&h=180"
              className="profilePic"
            />
            <div className="mt-auto">
              <p className="ms-3 mb-0">Shubham Singh</p>
              <p className="mb-0 ms-3">
                <b>112</b> posts <b className="ms-3">123</b> friends
              </p>
              <p className="ms-3 mb-2">Hello world ! I'm rising mern stack developer.</p>
            </div>
          </div>
          <div className="mt-auto mb-2">
            <button className="btn btn-sm btn-primary mx-1">Edit Profile</button>
            <button className="btn btn-sm btn-danger mx-1">Log Out</button>
          </div>
        </div>
      </div>
      <div className="allPost ">
        <div className="profileStoryHeader">
          <img src="https://tse3.mm.bing.net/th?id=OIP.Ws0egVZT4kItH0opvWo-3AAAAA&pid=Api&P=0&h=180" />
          <img src="https://tse3.mm.bing.net/th?id=OIP.Ws0egVZT4kItH0opvWo-3AAAAA&pid=Api&P=0&h=180" />
          <img src="https://tse3.mm.bing.net/th?id=OIP.Ws0egVZT4kItH0opvWo-3AAAAA&pid=Api&P=0&h=180" />
          <img src="https://tse3.mm.bing.net/th?id=OIP.Ws0egVZT4kItH0opvWo-3AAAAA&pid=Api&P=0&h=180" />
          <img src="https://tse3.mm.bing.net/th?id=OIP.Ws0egVZT4kItH0opvWo-3AAAAA&pid=Api&P=0&h=180" />
        </div>
        <div className="d-flex justify-content-around py-2" style={{ background: "gainsboro", color: "gray" }}>
          <p className="mx-1 mb-0" style={{ cursor: "pointer" }}>
            <i className="fa fa-list " style={{ position: "relative", top: "3px", cursor: "pointer" }}></i>
            <span className="mx-2">Grid</span>
          </p>
          <p className="mx-1 mb-0" style={{ cursor: "pointer" }}>
            <i className="fa fa-square " style={{ position: "relative", top: "3px", curser: "pointer" }}></i>
            <span className="mx-2">Post</span>
          </p>
          <p className="mx-1  mb-0" style={{ cursor: "pointer" }}>
            <i className="fa fa-save " style={{ position: "relative", top: "3px", cursor: "pointer" }}></i>
            <span className="mx-2">Saved</span>
          </p>
        </div>

        {/* grid view start */}
        <div className="row p-2 px-3">
          <SearchPost />
          <SearchPost />
          <SearchPost />
          <SearchPost />
          <SearchPost />
          <SearchPost />
          <SearchPost />
          <SearchPost />
          <SearchPost />
          <SearchPost />
        </div>
        {/* grid view end */}
      </div>
    </div>
      </>
  );
}

export default Profile;
