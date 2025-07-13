import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import { FaSpinner } from "react-icons/fa";
import "./ImageSlider.scss"

const ImageSlider = ({ url, limit=5, page=1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);


  if (loading) {
    return <FaSpinner className={"slider-spinner"} />
  }

  if (errorMsg !== null) {
    return <div>Error occurred {errorMsg}</div>;
  }

  return <div className={"slider-wrapper"}>
    <BsArrowLeftCircleFill onClick={handlePrevious} className={"arrow arrow-left"} />
    {
        images && images.length ?
        images.map((imageItem, index) => (
            <img
            key={imageItem.id}
            src={imageItem.download_url}
            alt={imageItem.download_url}
            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
        ))
        : null}
        <BsArrowRightCircleFill onClick={handleNext} className={"arrow arrow-right"} />
        <span className={"circle-indicators"}>
            {
                images && images.length ?
                images.map((_, index) => <button
                key={index}
                className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                onClick={() => setCurrentSlide(index)}
                ></button>)
                : null
            }
        </span>
  </div>;
};

export default ImageSlider;
