import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Slide({ slides, width = "full" }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => <div className="w-3 h-3 bg-white rounded-full"></div>,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  const nextSlide = () => sliderRef.current.slickNext();
  const previousSlide = () => sliderRef.current.slickPrev();

  return (
    <div className={`w-${width} h-96`}>
      <div className="w-full h-full overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="flex flex-row p-3 h-full items-center justify-center focus:outline-none">
                <div className="w-2/5 flex justify-center items-center">
                  <img
                    src={slide.bookPic}
                    alt={slide.bookName}
                    className="w-60 mx-auto"
                    loading="lazy"
                  />
                </div>
                <div className="w-3/5 pl-8">
                  <h2 className="text-3xl font-bold mb-4">{slide.bookName}</h2>
                  <h3 className="text-2xl mb-2">{slide.description}</h3>
                  <p className="text-xl text-gray-800 mb-2">{slide.author}</p>
                  <p className="text-xl text-red-500 mb-4">฿{slide.price}</p>
                  <Link
                    to={`/product/${slide.id}`}
                    className="bg-pink-500 text-white px-4 py-2 rounded-full"
                  >
                    Go to Book
                  </Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button
                    onClick={previousSlide}
                    className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700"
                    aria-label="Previous Slide"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700"
                    aria-label="Next Slide"
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
