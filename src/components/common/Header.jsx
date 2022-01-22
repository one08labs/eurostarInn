import React, { useState, useEffect, useRef } from "react";
import headerStyles from "../../styles/Header.module.css";
import { FaBars, FaBuilding, FaRegTimesCircle } from "react-icons/fa";

const Header = () => {
  const [navToggle, setToggle] = useState(false);
  const [navItems, setNavItems] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (navItems && ref.current && !ref.current.contains(e.target)) {
        setNavItems(false);
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  }, [navItems,setToggle]);

  return (
    <div
      className={
        navItems
          ? headerStyles.header_upperConter_mob
          : headerStyles.header_upperContainer
      }
      ref={ref}
    >
      <div className={headerStyles.header_hotel_logo}>
        <img src="/images/esi_logo.gif" />
      </div>
      <div
        className={
          navItems
            ? headerStyles.haeder_show_mobileView
            : headerStyles.header_navBar
        }
      >
        <ul className={headerStyles.header_navbar_points}>
          <li>
            <strong>Home </strong> <br />
            <span>welcome</span>
          </li>
          <li className={headerStyles.accomodation}>
            <strong>Accommodation </strong> <br />
            <span>
              Room categories <br /> & reservations
            </span>
            <ul className={headerStyles.accomodation_dropdown}>
              <li>Booking</li>
              <li>Hotel Facility</li>
              <li>Gallery</li>
            </ul>
          </li>
          <li>
            <strong> REVIEW US </strong>
            <br />
            <span>
              share your love <br /> with eurostar
            </span>
          </li>
          <li>
            <strong> CONTACT US </strong>
            <br />
            <span>get in touch</span>
          </li>
        </ul>
      </div>
      <div className={headerStyles.mobileNavBlock}>
        <div
          className={headerStyles.mobileNav_inner_block}
          onClick={() => {
            setToggle(!navToggle);
            setNavItems(!navItems);
          }}
        >
          {navToggle ? (
            <FaRegTimesCircle className={headerStyles.mobileNav_icons} />
          ) : (
            <FaBars className={headerStyles.mobileNav_icons} />
          )}
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
          >
            <p className={headerStyles.navTag}>Eurostar</p>
            <FaBuilding className={headerStyles.mobileNav_icons_two} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
