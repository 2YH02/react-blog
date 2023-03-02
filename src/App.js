import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "첫 게시물";

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
              <h4>글제목</h4>
              <p>1월 1일</p>
            </div>
          </li>
          <li className="post-list">
            <div>
              <h4>글제목</h4>
              <p>1월 1일</p>
            </div>
          </li>
          <li className="post-list">
            <div>
              <h4>글제목</h4>
              <p>1월 1일</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
