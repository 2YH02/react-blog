/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let postLists = ["첫번째 게시물", "두번째 게시물", "세번째 게시물"];
  let [posts, setPost] = useState(postLists);
  let [like, setLike] = useState(["🤍", "🤍", "🤍"]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  function changeLikeBtn(i) {
    let copyLike = [...like];
    if (copyLike[i] === "🤍") {
      copyLike[i] = "🧡";
      setLike(copyLike);
    } else {
      copyLike[i] = "🤍";
      setLike(copyLike);
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
          {posts.map((v, i) => {
            return (
              <li className="post-list">
                <div>
                  <h4
                    onClick={() => {
                      setModal(!modal);
                      setTitle(posts[i]);
                    }}
                  >
                    {v}{" "}
                    <span
                      onClick={() => {
                        changeLikeBtn(i);
                      }}
                      className="like-btn"
                    >
                      {like[i]}
                    </span>
                  </h4>
                  <p>1월 1일</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section>{modal ? <Modal title={title} posts={posts} /> : null}</section>
    </div>
  );
}
function Modal(props) {
  return (
    <div className="post-modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  );
}

export default App;
