import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Testimonial.scss";

const Testimonial = (props) => {
  const testimonials = props.testimonials;
  // const [currentId, setCurrentId] = useState(0);

  return (
    <div className="testimonials">
      {testimonials.map((item, idx) => (
        <TestimonialItem key={idx} testimonial={item} />
      ))}
      {/* <TestimonialCardItem
        // currentId={currentId}
        // setCurrentId={setCurrentId}
        testimonial={testimonials[currentId]}
        length={testimonials.length}
      /> */}
    </div>
  );
};

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="testimonial">
      <img src={testimonial.avatar} alt="user-image"></img>
      <div className="testimonial-info">
        <q className="testimonial-content">{testimonial.content}</q>
        <div className="quoted-by-info">
          <span className="testimonial-name">{testimonial.name}</span>
          {", "}
          <span className="testimonial-seller">{testimonial.sellerStore}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialCardItem = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      {/* {currentId > 0 && (
        <button
          className="prev-button"
          onClick={() => {
            setCurrentId(currentId - 1);
          }}
        >
          <FiChevronLeft />
        </button>
      )} */}
      <img src={testimonial.avatar} alt="user-image"></img>
      <div className="testimonial-info">
        <q className="testimonial-content">{testimonial.content}</q>
        <div className="quoted-by-info">
          <span className="testimonial-name">{testimonial.name}</span>
          {", "}
          <span className="testimonial-seller">{testimonial.sellerStore}</span>
        </div>
      </div>
      {/* {currentId < length - 1 && (
        <button
          className="next-button"
          onClick={() => setCurrentId(currentId + 1)}
        >
          <FiChevronRight />
        </button>
      )} */}
    </div>
  );
};

export default Testimonial;
