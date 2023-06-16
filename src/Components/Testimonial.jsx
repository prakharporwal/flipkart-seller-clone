import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Testimonial.scss";

const Testimonial = (props) => {
  const testimonials = props.testimonials;
  const [currentId, setCurrentId] = useState(0);
  let start = currentId - 1 >= 0 ? currentId - 1 : 0;
  let end =
    currentId + 2 <= testimonials.length ? currentId + 2 : testimonials.length;
  const testimonialInDom = testimonials.slice(start, end);

  const carouselRef = useRef(null);

  useEffect(() => {
    console.log(start, end);
  }, []);

  return (
    <>
      <div className="testimonials">
        {testimonials.map((item, idx) => (
          <TestimonialItem key={idx} testimonial={item} />
        ))}
      </div>
      <div className="carousel-wrapper">
        <div className="testimonials-carousel" ref={carouselRef}>
          {testimonials.map((item, idx) => (
            <TestimonialCarouselItem
              ref={carouselRef}
              key={idx}
              currentId={currentId}
              setCurrentId={setCurrentId}
              testimonial={testimonials[idx]}
              length={testimonials.length}
            />
          ))}

          {/* <CarouselWrapper
          currentId={currentId}
          setCurrentId={setCurrentId}
          testimonials={testimonials}
          length={testimonials.length}
        /> */}
        </div>
      </div>
    </>
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

// const CarouselWrapper = ({
//   testimonials,
//   currentId,
//   setCurrentId,
//   length,
//   className,
// }) => {
//   const prevRef = createRef();
//   const nextRef = createRef();

//   return (
//     <>
//       {currentId - 1 >= 0 && (
//         <TestimonialCarouselItem
//           currentId={currentId - 1}
//           testimonial={testimonials[currentId - 1]}
//           setCurrentId={setCurrentId}
//           length={length}
//           className={className}
//           ref={prevRef}
//         />
//       )}
//       {currentId + 1 < length && (
//         <TestimonialCarouselItem
//           currentId={currentId + 1}
//           testimonial={testimonials[currentId + 1]}
//           setCurrentId={setCurrentId}
//           length={length}
//           className={className}
//           ref={nextRef}
//         />
//       )}
//       <TestimonialCarouselItem
//         currentId={currentId}
//         testimonial={testimonials[currentId]}
//         setCurrentId={setCurrentId}
//         length={length}
//         className={className}
//         prevRef={prevRef}
//         nextRef={nextRef}
//       />
//     </>
//   );
// };

const TestimonialCarouselItem = forwardRef(
  ({ testimonial, currentId, setCurrentId, length, className }, parentRef) => {
    useEffect(() => {
      parentRef.current.style.transform = `translateX(calc(-100vw*${currentId}))`;
    }, [currentId]);

    return (
      <div className="testimonial-carousel-card">
        <div className="carousel-button-wrapper">
          {currentId > 0 && (
            <button
              className="prev-button"
              onClick={() => {
                // parentRef.current.style.transform = "translateX(100vw)";
                setCurrentId(currentId - 1);
              }}
            >
              <FiChevronLeft />
            </button>
          )}
        </div>
        <img src={testimonial.avatar} alt="user-image"></img>
        <div className="testimonial-info">
          <q className="testimonial-content">{testimonial.content}</q>
          <div className="quoted-by-info">
            <span className="testimonial-name">{testimonial.name}</span>
            {", "}
            <span className="testimonial-seller">
              {testimonial.sellerStore}
            </span>
          </div>
        </div>
        <div className="carousel-button-wrapper">
          {currentId < length - 1 && (
            <button
              className="next-button"
              onClick={() => {
                // parentRef.current.style.transform = "translateX(-100vw)";
                setCurrentId(currentId + 1);
              }}
            >
              <FiChevronRight />
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default Testimonial;
