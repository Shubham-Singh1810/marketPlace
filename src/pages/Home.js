import React from "react";
import Post from "../components/Post";
import Banner from "../components/Banner";
import Create from "./Create";
import {Link} from "react-router-dom"

function Home() {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP.dYWvYkXgj1jP66ZZ6PzY0QHaGc&pid=Api&P=0&h=180",
    "https://tse3.explicit.bing.net/th?id=OIP.ZhqnB_m_0VYLAHxFTke6ogHaEz&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.eX3ULEN42zuNtLsD828xYQHaEc&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.rUPD4VoZvAz6C3GWhTmouQHaFj&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.eNQHwZeeGYE_2Sp3kLzsWgHaEK&pid=Api&P=0&h=180",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));
  return (
    <div>
      {/* home start */}
      <div className="row mx-lg-5 mt-2  px-lg-5 py-lg-4  py-0 px-0">
        <div className="  col-lg-3 profileCard shadow-lg rounded p-3">
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
        {/* story header start */}
        <div className="col-lg-9  ">
          <Banner images={images} speed={12000} slideType={"leftSlide"} />
          <div className="storyContainer">
            <div className="singleStory">
              <div className="story ">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
            <div className="singleStory">
              <div className="story">
                <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
              </div>
              <p>Shubham Singh</p>
            </div>
          </div>
        </div>
        {/* story header end */}
      </div>
      <div className="px-lg-5 mx-lg-5 py-lg-4 py-0 mt-3 px-0 row div2">
        <div className="  col-lg-3 profileCard shadow-lg rounded sideNav " style={{ height: "300px" }}>
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
        <div className="col-lg-4 postContainer">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="col-lg-5 shadow-lg px-3" style={{ height: "250px" }}>
          <p style={{ textAlign: "right" }} className="mt-2">
            <u>Friend Suggestion</u>
          </p>
          <div className="row">
            <div className="col-4 p-3 frinendSuggestion">
              <img src="https://tse3.mm.bing.net/th?id=OIP.eNQHwZeeGYE_2Sp3kLzsWgHaEK&pid=Api&P=0&h=180" />
              <p className="mb-2">Aman Kumar</p>
              <button className="btn w-100 btn-sm btn-info">Add Friend</button>
            </div>
            <div className="col-4 p-3 frinendSuggestion">
              <img src="https://tse3.mm.bing.net/th?id=OIP.eNQHwZeeGYE_2Sp3kLzsWgHaEK&pid=Api&P=0&h=180" />
              <p className="mb-2">Aman Kumar</p>
              <button className="btn w-100 btn-sm btn-info">Add Friend</button>
            </div>
            <div className="col-4 p-3 frinendSuggestion">
              <img src="https://tse3.mm.bing.net/th?id=OIP.eNQHwZeeGYE_2Sp3kLzsWgHaEK&pid=Api&P=0&h=180" />
              <p className="mb-2">Aman Kumar</p>
              <button className="btn w-100 btn-sm btn-info">Add Friend</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Create/> */}
      {/* home end */}
    </div>
  );
}

export default Home;
