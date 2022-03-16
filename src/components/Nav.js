import React from "react";

const Nav = ({ ScrollY }) => {
  // const navLink_d = {}
  const navLink_s = {
    fontSize: "1rem",
    fontWeight: 500,
  };
  return (
    <nav>
      <ul>
        <li>
          <a
            className={ScrollY <= 1000 ? "nav-link active" : "nav-link "}
            href="#home"
            style={ScrollY > 160 ? navLink_s : {}}
          >
            home 링크
          </a>
        </li>
        <li>
          <a
            className={
              ScrollY > 1000 && ScrollY <= 2000
                ? "nav-link active"
                : "nav-link "
            }
            href="#link1"
            style={ScrollY > 160 ? navLink_s : {}}
          >
            1번 링크
          </a>
        </li>
        <li>
          <a
            className={
              ScrollY > 2000 && ScrollY <= 3000
                ? "nav-link active"
                : "nav-link "
            }
            href="#link2"
            style={ScrollY > 160 ? navLink_s : {}}
          >
            2번 링크
          </a>
        </li>
        <li>
          <a
            className={
              ScrollY > 3000 && ScrollY <= 4000
                ? "nav-link active"
                : "nav-link "
            }
            href="#link3"
            style={ScrollY > 160 ? navLink_s : {}}
          >
            3번 링크
          </a>
        </li>
        <li>
          <a
            className={ScrollY > 4000 ? "nav-link active" : "nav-link "}
            href="#link4"
            style={ScrollY > 160 ? navLink_s : {}}
          >
            4번 링크
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
