import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "../../../styles/HomeCarousel.module.css";

let homeCarousel = [
  {
    url: "/images/hotel_front_view.jpg",
    title: "EurostarInn Front View",
    desc: "The ideal place to rest and relax after an intense day enjoying the town",
  },
  {
    url: "/images/front.jpg",
    title: "EuroStar Inn Khajuraho",
    desc: "EuroStar Inn presents high standard of hospitality along with all the modern facilities for a wonderful stay",
  },
];

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let length = homeCarousel.length;

  const classJoin = (arr) => {
    return arr.join(" ");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex(() => (prevIndex === length - 1 ? 0 : prevIndex + 1));
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
    <div className={styles.carousel_component}>
      <div className={styles.icon_component_one} onClick={() => prevSlide()}>
        <IoIosArrowBack className={styles.icons} />
      </div>
      <div className={classJoin([styles.carousel_images])}>
        <img
          src={homeCarousel[activeIndex]?.url}
          alt="eurostar inn"
          className={styles.fade}
        />
        <div className={classJoin([styles.carousel_description])}>
          <h3 className={styles.carousel_heading}>
            {homeCarousel[activeIndex]?.title}
          </h3>
          <p className={styles.carousel_subText}>
            {homeCarousel[activeIndex]?.desc}
          </p>
        </div>
      </div>
      <div className={styles.icon_component_two} onClick={() => nextSlide()}>
        <IoIosArrowForward className={styles.icons} />
      </div>
    </div>
  );
};

export default HomeCarousel;
