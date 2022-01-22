import React from "react";
import styles from "../../styles/TopWidget.module.css";

import { IoCallSharp, IoMail } from "react-icons/io5";
import { Button } from "rsuite";

const TopWidget = () => {
  return (
    <div className={styles.topwidget_upperContainer}>
      <div className={styles.topWidget_innerContainer}>
        <div className={styles.topWidget_web_View}>
          <IoCallSharp className={styles.icon} />
          <a href="tel: +919981296029" className={styles.topWidget_text}>
            +919981296029
          </a>
          <IoMail className={styles.icon} />
          <a
            href="mailto:contactus@eurostarinn.com?Subject=Booking%20Enquiry"
            className={styles.topWidget_text}
          >
            contactus@eurostarinn.com
          </a>
        </div>
        <div className={styles.topWidget_mobile_view}>
          <a href="tel:+919981296029">
            <IoCallSharp className={styles.icon} />
          </a>
        </div>
        <Button color="red" appearance="primary">
          Book Now
        </Button>
        <div className={styles.topWidget_mobile_view}>
          <a href="mailto:contactus@eurostarinn.com?Subject=Booking%20Enquiry">
            <IoMail className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopWidget;
