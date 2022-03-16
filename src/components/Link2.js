import React from "react";
import building1 from "../image/building1.jpg";
import building2 from "../image/building2.jpg";
import building3 from "../image/building3.jpg";

const Link2 = () => {
  return (
    <div className="box" id="link2">
      <div className="box3">
        <div className="box3-items">
          <h2>1. 1번 내용</h2>
          <img className="box3_img" src={building1} />
          <div>
            <h4 className="box3_h4">
              내용 설명1 <br />
              내용 설명2
            </h4>
            <p>
              상세설명 1 <br />
              상세설명 2
            </p>
          </div>
        </div>
        <div className="box3-items">
          <h2>2. 1번 내용</h2>
          <img className="box3_img" src={building2} />
          <div>
            <h4 className="box3_h4">
              내용 설명1 <br />
              내용 설명2
            </h4>
            <p>
              상세설명 1 <br />
              상세설명 2
            </p>
          </div>
        </div>
        <div className="box3-items">
          <h2>3. 1번 내용</h2>
          <img className="box3_img" src={building3} />
          <div>
            <h4 className="box3_h4">
              내용 설명1 <br />
              내용 설명2
            </h4>
            <p>
              상세설명 1 <br />
              상세설명 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link2;
