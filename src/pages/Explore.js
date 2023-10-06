import React from "react";
import Banner from "../components/Banner";
import SearchPost from "../components/SearchPost";
import SideNav from "../components/SideNav";
function Explore() {
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
      <div className="row mx-lg-5 mt-2  px-lg-5 py-lg-4  py-0 px-0">
        <SideNav/>

        {/* Search Result start */}
        <div className="col-lg-9  row">
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
        {/* Search Result end */}
      </div>
    </div>
  );
}

export default Explore;
