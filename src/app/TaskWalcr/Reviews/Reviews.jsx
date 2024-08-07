import React from "react";
import { TopBar } from "@/components/TopBar/TopBar";
import Image from "next/image";
import { StarIcon } from "@/assets/index";
import ReviewImg from "@/assets/images/reviewProfile.png";
import ReviewImg2 from "@/assets/images/reviewImg2.svg";
import ReviewImg3 from "@/assets/images/reviewImg3.svg";
import ReviewImg4 from "@/assets/images/reviewImg4.svg";
import ReviewImg5 from "@/assets/images/reviewImg5.svg";
import ReviewImg6 from "@/assets/images/reviewImg6.svg";

const profiles = [
  {
    src: ReviewImg,
    rating: 5,
    text: "Excellent product! Highly recommend.",
    title: "Good service but can be great",
  },
  {
    src: ReviewImg2,
    rating: 4,
    text: "Very good, but could be improved.",
    title: "Good service but can be great",
  },
  // { src: ReviewImg3, rating: 5, text: "Perfect! Exactly what I needed.", title:"Good service but can be great"  },
  {
    src: ReviewImg4,
    rating: 3,
    text: "I think he is patient and handle the delivery carefully",
    title: "Good service but can be great",
  },
  {
    src: ReviewImg5,
    rating: 5,
    text: "Fantastic! Exceeded my expectations.",
    title: "Good service but can be great",
  },
  {
    src: ReviewImg6,
    rating: 5,
    text: "Fantastic! Exceeded my expectations.",
    title: "Good service but can be great",
  },
];

const Review = ({ src, rating, text, title }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
            width: "85%",
          }}
        >
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <h1 style={{ fontSize: "20px", fontWeight: "700" }}>{title}</h1>
        <p style={{ fontSize: "16px", color: "#8C92AB", width: "75%" }}>
          {text}
        </p>
        <div></div>
      </div>
      <div style={{ marginRight: "10px" }}>
        <Image
          src={src}
          alt="Profile"
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        />
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div style={{ padding: "10px", paddingTop: "30px" }}>
      <TopBar href={"/taskwalcr/profile"} text={"Reviews"} />

      {profiles.map((rev, i) => (
        <Review
          key={i}
          src={rev.src}
          rating={rev.rating}
          text={rev.text}
          title={rev.title}
        />
      ))}
    </div>
  );
};

export default Reviews;
