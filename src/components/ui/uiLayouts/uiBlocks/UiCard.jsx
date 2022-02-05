import React, { useState, useEffect } from "react";
import UICardStyle from "./UiCard.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const UiCard = ({
  image,
  description,
  list,
  button,
  heading,
  alt,
  carousal,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = carousal && carousal.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex(() => (activeIndex === length - 1 ? 0 : activeIndex + 1));
    }, 6000);

    return () => clearTimeout(timeout);
  }, [activeIndex, setActiveIndex, length]);

  const prevSlide = () => {
    setActiveIndex(() => (activeIndex === 0 ? length - 1 : activeIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex(() => (activeIndex === length - 1 ? 0 : activeIndex + 1));
  };

  return (
    <div className={UICardStyle.outerComponent}>
      <div className={UICardStyle.UICardComponent}>
        <h2>{heading}</h2>
        <div className={UICardStyle.bottomBorder}>
          <div className={UICardStyle.bottomLine} />
        </div>
        {image && (
          <div className={UICardStyle.imageOuterContainer}>
            <div className={UICardStyle.imageContainer}>
              <img src={image} alt={alt} />
            </div>
          </div>
        )}
        {description && (
          <div className={UICardStyle.descriptionContainer}>
            <p>{description}</p>
          </div>
        )}
        <div className={UICardStyle.listContainer}>
          {list && list.length > 0 && (
            <ul className={UICardStyle.list}>
              {list.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={UICardStyle.carousalContainer}>
          {carousal && carousal.length > 0 && (
            <>
              <div
                className={UICardStyle.icon_component_one}
                onClick={() => prevSlide()}
              >
                <IoIosArrowBack className={UICardStyle.icons} />
              </div>
              <div className={UICardStyle.carousalImage}>
                <img
                  src={carousal[activeIndex]?.url}
                  alt={carousal[activeIndex].alt}
                />
              </div>
              <div
                className={UICardStyle.icon_component_two}
                onClick={() => nextSlide()}
              >
                <IoIosArrowForward className={UICardStyle.icons} />
              </div>
            </>
          )}
        </div>
        <div className={UICardStyle.buttonContainer}>
          {button && button?.buttonName && (
            <Link to={button?.url} className={UICardStyle.buttonLink}>
              {button?.buttonName}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UiCard;
