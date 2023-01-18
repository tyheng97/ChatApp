import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ChatApp</span>
      <div className="user">
        <img
          src="https://t1.kakaocdn.net/friends/official/with-kangdaniel/images/img-little-apeach-01.png"
          alt=""
        />
        <span>yiheng</span>
        <button>logout</button>
      </div>
    </div>
  );
};
