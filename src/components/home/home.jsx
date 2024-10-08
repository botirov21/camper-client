import {
  Blogscontainer,
  Homecontainer,
  Imagecontainer,
  Linediv,
  Loremcontainer,
  VideoPlayer,
  Videodiv,
} from "./style";
import Popup from "reactjs-popup";
import Example from "../pages/carouselcomp/carousel";
import image from "../../assets/car22.png";
import image1 from "../../assets/car33.png";
import image2 from "../../assets/imag3car.png";
import MultiCarousel from "../pages/multicarousel/multicarousel";
// import Flip from "react-reveal/Flip";
import TransitionsModal from "../popup/pupup";
import Carusel from "../pages/carouselcomp/carousel";

const Home = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Carusel/>
      <div style={{ display: `flex`, flexDirection: `column` }}>
        <Homecontainer>
          <h1>Recommend</h1>
          <Linediv></Linediv>
          <MultiCarousel />
          <h1>Videos</h1>
          <Linediv></Linediv>
          <TransitionsModal />
          <h1>Blogs</h1>
          <Linediv></Linediv>
          <Blogscontainer>  
            <Loremcontainer>
              <h1>Camper</h1>
              <h3>@Camper</h3>
              <p>
                Camping truly is for everyone, from your oldest family member to
                little campers just trekking out for the first time. Whether
                your plan is to relax, explore or reconnect, CAMPER campgrounds
                are a great place to create memories with those you love.
              </p>
            </Loremcontainer>
            <Imagecontainer>
              {/* <Flip top> */}
                <img src={image} alt="Image 1" />
              {/* </Flip> */}
                <img src={image1} alt="Image 2" />
                <img src={image2} alt="Image 3" />
                <img src={image} alt="Image 4" />
                <img src={image1} alt="Image 5" />
                <img src={image2} alt="Image 6" />
            </Imagecontainer>
          </Blogscontainer>
        </Homecontainer>
      </div>
    </div>
  );
};

export default Home;
