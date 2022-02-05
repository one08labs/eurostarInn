import React from "react";
import UiCard from "../ui/uiLayouts/uiBlocks/UiCard";
import CardsComponentStyle from "./CardsComponent.module.css";

const list = [
  "24 Hours Room Service",
  "Air Conditioned Rooms",
  "Cable LCD T.V",
  "Roof top/Ac Restaurant,With room service",
  "Airport/Taxi assistance facility",
  "Morning yoga classes and massage facility",
  "Money changer",
  "Wake up call services, fax and Xerox",
  "Conference room, reception 24/7, free parking",
];

const CardsComponent = () => {
  const slidesImage = [
    { url: "/images/Executive_5.jpg", alt: "executive" },
    { url: "/images/IMG_20180724_181909.jpg", alt: "room 1" },
    { url: "/images/Deluxe(1).jpg", alt: "Deluxe(1)" },
    { url: "/images/Deluxe(2).jpg", alt: "Deluxe(2)" },
    { url: "/images/Deluxe(3).jpg", alt: "Deluxe(3)" },
    { url: "/images/Deluxe(4).jpg", alt: "Deluxe(4)" },
    { url: "/images/Deluxe(5).jpg", alt: "Deluxe(5)" },
  ];

  return (
    <div className={CardsComponentStyle.outerComponent}>
      <UiCard
        heading="About EuroStar Inn"
        image="/images/demo_image_01.jpg"
        button={{ buttonName: "Read more", url: "/" }}
        description="EuroStar Inn was created to offer maximum comfort to its clients. The big rooms are furnished and decorated in a minimal style which allows the perfect space use. In addition, it is decorated with warm colors which create a great welcome atmosphere for its clients."
      />
      <UiCard
        heading="Hotel Overview"
        list={list}
        button={{ buttonName: "Read more", url: "/" }}
      />
      <UiCard
        heading="Gallery"
        carousal={slidesImage}
        button={{ buttonName: "Show more", url: "/" }}
      />
    </div>
  );
};

export default CardsComponent;
