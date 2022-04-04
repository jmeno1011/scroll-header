import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Link1 from "./components/Link1";
import Link2 from "./components/Link2";
import Link3 from "./components/Link3";
import Link4 from "./components/Link4";
import tree2 from "./asset/image/tree2.jpg";
import Home from "./components/Home";
import Nav from "./components/Nav";
function App() {
  const [ScrollY, setScrollY] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const picture_style_d = {
    width: 200,
    height: 120,
    transition: "all 0.6s cubic-bezier(0.86, 0, 0.07, 1)",
  };
  const picture_style_s = {
    width: 130,
    height: 80,
    transition: "all 0.6s cubic-bezier(0.86, 0, 0.07, 1)",
  };
  return (
    <div>
      <header>
        <div className="header-wrapper">
          <div className="logo">
            <picture style={ScrollY > 240 ? picture_style_s : picture_style_d}>
              <img src={tree2} style={{ width: "100%", height: "100%" }} alt="tree_logo"/>
            </picture>
          </div>
          <div>
            <Nav ScrollY={ScrollY} />
          </div>
        </div>
      </header>
      <main>
        <Home />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </main>
    </div>
  );
}

export default App;
