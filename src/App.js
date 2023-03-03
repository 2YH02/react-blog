/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let postLists = ["첫번째 게시물", "두번째 게시물", "세번째 게시물"];
  let [posts, setPost] = useState(postLists);
  let [like, setLike] = useState("🤍");
  let [likeSt, setLikeSt] = useState(false);

  function changeLikeBtn() {
    if (!likeSt) {
      setLikeSt(true);
      setLike("🧡");
    } else {
      setLikeSt(false);
      setLike("🤍");
    }
  }

  return (
    <div className="App">
      <section id="top-bar">
        <nav className="main-nav">
          <div className="main-title">
            <h4>
              <a href="">블로그 이름</a>
            </h4>
          </div>
          <div className="main-link">
            <ul>
              <li>
                <a href="">링크</a>
              </li>
              <li>
                <a href="">링크</a>
              </li>
              <li>
                <a href="">링크</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section id="main-blog">
        <ul>
          <li className="post-list">
            <div>
              <h4>
                {posts[0]}{" "}
                <span onClick={changeLikeBtn} className="like-btn">
                  {like}
                </span>
              </h4>
              <p>1월 1일</p>
            </div>
          </li>
          <li className="post-list">
            <div>
              <h4>{posts[1]}</h4>
              <p>1월 1일</p>
            </div>
          </li>
          <li className="post-list">
            <div>
              <h4>{posts[2]}</h4>
              <p>1월 1일</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
