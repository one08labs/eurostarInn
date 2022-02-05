import React from "react";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

import FooterStyle from "./Footer.module.css";
import { classJoin } from "../../utils/classJoin";

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <div
        className={classJoin([FooterStyle.commonBlock, FooterStyle.firstBlock])}
      >
        <div className={classJoin([FooterStyle.Cards])}>
          <p className={FooterStyle.heading}>CERTIFICATE OF EXCELLENCE</p>
          <div className={FooterStyle.bottomLine} />
          <a
            href="https://www.tripadvisor.in/Hotel_Review-g297647-d2041217-Reviews-EuroStar_Inn-Khajuraho_Chhatarpur_District_Madhya_Pradesh.html"
            target="_blank"
          >
            <div className={FooterStyle.certOfExc}>
              <img
                src="https://www.tripadvisor.in/img/cdsi/img2/awards/v2/coe-14348-2.png"
                alt="TripAdvisor"
              />
              <p className={FooterStyle.certLine}>
                Certificate of Excellence 2015 <br />
                Read Reviews
              </p>
            </div>
          </a>
        </div>
        <div className={classJoin([FooterStyle.Cards])}>
          <p className={FooterStyle.heading}>BRAVO AWARD</p>
          <div className={FooterStyle.bottomLine} />
          <div className={FooterStyle.bravoAwardBlock}>
            <div className={FooterStyle.bravoHeading}>Bravo</div>
            <p className={FooterStyle.bravoHeadingIntro}>
              Eurostar inn rated <br /> "excellent" by 72 <br /> travellers
            </p>
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="tripadvisor"
            />
          </div>
        </div>
        {/* </div>
      <div
        className={classJoin([
          FooterStyle.commonBlock,
          FooterStyle.secondBlock,
        ])}
      > */}
        <div className={classJoin([FooterStyle.Cards])}>
          <p className={FooterStyle.heading}>Social media</p>
          <div className={FooterStyle.bottomLine} />
          <div className={classJoin([FooterStyle.iconsBlock])}>
            <FaGooglePlusG className={classJoin([FooterStyle.icon])} />
          </div>
          <div className={classJoin([FooterStyle.iconsBlock])}>
            <FaFacebookF className={classJoin([FooterStyle.icon])} />
          </div>
        </div>
        <div className={classJoin([FooterStyle.Cards])}>
          <p className={FooterStyle.heading}>Site Map</p>
          <div className={FooterStyle.bottomLine} />
          <div>
            <Link to="/" className={FooterStyle.threePoints}>
              <p>Accomodation</p>
            </Link>
            <Link to="/" className={FooterStyle.threePoints}>
              <p>Special Offers</p>
            </Link>
            <Link to="/" className={FooterStyle.threePoints}>
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={FooterStyle.footerBottom}>
        <div>
          <p className={FooterStyle.copyRight}>
            © 2014 Eurostar Inn. All Rights Reserved
          </p>
        </div>
        <div>
          <Link
            to="/"
            className={classJoin([
              FooterStyle.copyRight,
              FooterStyle.conditions,
            ])}
          >
            Privacy Policy
          </Link>
          /
          <Link
            to="/"
            className={classJoin([
              FooterStyle.copyRight,
              FooterStyle.conditions,
            ])}
          >
            Terms & Condition
          </Link>
          /
          <Link
            to="/"
            className={classJoin([
              FooterStyle.copyRight,
              FooterStyle.conditions,
            ])}
          >
            Return Policy
          </Link>
          /
          <Link
            to="/"
            className={classJoin([
              FooterStyle.copyRight,
              FooterStyle.conditions,
            ])}
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
