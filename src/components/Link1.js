import React from "react";
import Slider from "react-slick";
import gif1 from "../asset/image/gif/giphy1.gif";
import gif2 from "../asset/image/gif/giphy2.gif";
import gif3 from "../asset/image/gif/giphy3.gif";
import gif4 from "../asset/image/gif/giphy4.gif";

const Link1 = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="box" id="link1">
      <div className="box2">
        <Slider {...settings}>
          <div>
            <img alt="" src={gif1} />
            {/* <h1>1</h1> */}
          </div>
          <div>
            <img alt="" src={gif2} />
          </div>
          <div>
            <img alt="" src={gif3} />
          </div>
          <div>
            <img alt="" src={gif4} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Link1;
