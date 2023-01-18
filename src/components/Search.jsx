import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a User" />
      </div>
      <div className="userChat">
        <img
          src="https://t1.kakaocdn.net/friends/official/with-kangdaniel/images/img-little-apeach-01.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>YO</span>
        </div>
      </div>
    </div>
  );
};
