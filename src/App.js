import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Link1 from "./components/Link1";
import Link2 from "./components/Link2";
import Link3 from "./components/Link3";
import Link4 from "./components/Link4";

function App() {
  const [ScrollY, setScrollY] = useState(0);

  const handleFollow = useCallback(() => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  });

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  }, []);

  return (
    <div>
      <header>
        <div className="header-wrapper">
          <div className="logo">
            <h1>
              <a href="/">헤더</a>
            </h1>
          </div>
          <nav>
            <ul>
              <li>
                <a
                  className={ScrollY <= 1000 ? "nav-link active" : "nav-link "}
                  href="#link1"
                >
                  1번 링크
                </a>
              </li>
              <li>
                <a
                  className={
                    ScrollY > 1000 && ScrollY <= 2000
                      ? "nav-link active"
                      : "nav-link "
                  }
                  href="#link2"
                >
                  2번 링크
                </a>
              </li>
              <li>
                <a
                  className={
                    ScrollY > 2000 && ScrollY <= 3000
                      ? "nav-link active"
                      : "nav-link "
                  }
                  href="#link3"
                >
                  3번 링크
                </a>
              </li>
              <li>
                <a
                  className={ScrollY > 3000 ? "nav-link active" : "nav-link "}
                  href="#link4"
                >
                  4번 링크
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </main>
    </div>
  );
}

export default App;
