import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";
import styles from "../../../styles/HomeCarousel.module.css";
import { Button } from "rsuite";

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
    <div className={styles.carousel_an_form_component}>
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

      {/* --- form ---- */}

      <div className={styles.form_container}>
        <form>
          <div className={styles.form_input}>
            <input type="text" placeholder="Check In" />
            <IoCalendar />
          </div>
          <div className={classJoin([styles.form_input,styles.form_select_persons])}>
            <input type="text" placeholder="Check Out" />
            <IoCalendar />
          </div>
          <div>
            <select placeholder="Rooms" className={classJoin([styles.form_select,styles.form_select_rooms])}>
              <option key="null" value="null">
                Rooms
              </option>
              <option key="1" value="1">
                1
              </option>
              <option key="2" value="2">
                2
              </option>
              <option key="3" value="3">
                3
              </option>
              <option key="4" value="4">
                4
              </option>
              <option key="5" value="5">
                5
              </option>
              <option key="6" value="6">
                6
              </option>
              <option key="7" value="7">
                7
              </option>
              <option key="8" value="8">
                8
              </option>
              <option key="9" value="9">
                9
              </option>
              <option key="10" value="10">
                10
              </option>
              <option key="11" value="11">
                11
              </option>
              <option key="12" value="12">
                12
              </option>
            </select>
          </div>
          <div>
            <select placeholder="Persons" className={styles.form_select}>
              <option key="null" value="null">
                Persons
              </option>
              <option key="1" value="1">
                1
              </option>
              <option key="2" value="2">
                2
              </option>
              <option key="3" value="3">
                3
              </option>
              <option key="4" value="4">
                4
              </option>
              <option key="5" value="5">
                5
              </option>
              <option key="6" value="6">
                6
              </option>
              <option key="7" value="7">
                7
              </option>
              <option key="8" value="8">
                8
              </option>
              <option key="9" value="9">
                9
              </option>
              <option key="10" value="10">
                10
              </option>
              <option key="11" value="11">
                11
              </option>
              <option key="12" value="12">
                12
              </option>
            </select>
          </div>
          <Button color="red" appearance="primary" className={styles.form_button}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HomeCarousel;
