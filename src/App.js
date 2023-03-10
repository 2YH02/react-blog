/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [posts, setPost] = useState([
    "첫번째 게시물",
    "두번째 게시물",
    "세번째 게시물",
  ]);
  let [like, setLike] = useState(["🤍", "🤍", "🤍"]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState("");

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
                      onClick={(e) => {
                        e.stopPropagation();
                        changeLikeBtn(i);
                      }}
                      className="like-btn"
                    >
                      {like[i]}
                    </span>
                  </h4>
                  <p>1월 1일</p>
                </div>
                <button
                  id="delete-btn"
                  onClick={() => {
                    let copy1 = [...posts];
                    copy1.splice(i, 1);
                    setPost(copy1);
                    let copy = [...like];
                    copy.splice(i, 1);
                    setLike(copy);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <div id="post-input">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button
          id="post-btn"
          onClick={() => {
            let copy1 = [...posts];
            copy1.push(input);
            setPost(copy1);
            let copy = [...like];
            copy.push("🤍");
            setLike(copy);
            console.log(input);
          }}
        >
          post
        </button>
      </div>

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
