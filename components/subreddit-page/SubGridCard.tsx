import React from "react";
import { getIntFromString, getTime, limitText } from "../../functions/common";
import { TITLE_MAX } from "../../functions/constants";
import { Post } from "../../interfaces";

const SubGridCard = (post: Post) =>
  post.hasOwnProperty("title") ? (
    <div className="overflow-hidden w-4/12 flex-grow px-4 mb-4">
      <div>
        <div
          className="w-full shimmer-bg"
          style={{
            backgroundImage:
              "url(" +
              (post.thumbnail && post.thumbnail.includes("://")
                ? post.thumbnail
                : "/default.jpg") +
              ")",
            height: "180px",
            backgroundSize: "cover"
          }}
        ></div>
        <h2 className="text-xl pt-6">{limitText(post.title, TITLE_MAX)}</h2>
        <h4 className="text-lg my-2 tracking-tight sub-opacity-54 w-10/12">
          {limitText(post.selftext, TITLE_MAX)}
        </h4>
        <div className="sub-text font-medium main-black flex flex-row items-center mb-4 pt-3">
          <div
            className="rounded-full"
            style={{
              backgroundImage: `url('/avatars/avatar (${getIntFromString(
                post.author,
                18
              )}).jpg')`,
              width: "36px",
              height: "36px",
              backgroundSize: "cover"
            }}
          ></div>
          <div className="pl-2 font-semibold">
            <span className="sub-link-grey">{post.author}</span>
            <div className="tracking-5 sub-opacity-68">
              <span>{getTime(post.created_utc)}</span>
              <span className="px-2">·</span>
              <span>{post.subreddit_name_prefixed}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex-grow overflow-hidden shimmer">
      <div
        className="w-full shimmer-bg"
        style={{
          height: "180px",
        }}
      ></div>
      <div className="w-full">
        <div className="sub-text font-medium main-black mt-3">
          <div className="h-2 w-20 shimmer-bg"></div>
        </div>
        <div className="h-4 w-full mt-2 shimmer-bg"></div>
        <div className="h-4 w-16 mt-2 shimmer-bg"></div>
        <div className="sub-text mt-2 shimmer-bg w-10 h-2"></div>
      </div>
    </div>
  );

export default SubGridCard;