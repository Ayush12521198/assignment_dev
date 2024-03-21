import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        if (data && data.user && data.user.testimonials) {
          setTestimonials(data.user.testimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
    dataImage();
    imgToSVG();
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="testimonials_list wow fadeInUp" data-wow-duration="1s">
            <Swiper {...testimonialsSlider} className="owl-carousel owl-theme owl-loaded">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="list_inner">
                    <img className="svg" src="img/svg/quote.svg" alt="" />
                    <p className="text">{testimonial.review}</p>
                    <div className="details">
                      <div className="image">
                        <div className="main" data-img-url={testimonial.image.url} />
                      </div>
                      <div className="short">
                        <h3>{testimonial.name}</h3>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="owl-dots"></div>
          </div>
          <div className="shape moving_effect" data-direction="y" data-reverse="yes" />
          <div className="shape_2 moving_effect" data-direction="y" data-reverse="yes" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
