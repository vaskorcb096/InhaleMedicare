import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardDeck, Spinner } from 'react-bootstrap';

import { Card } from "react-bootstrap";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
// install Swiper modules
import { Fade } from "react-awesome-reveal";
import BlogPost from "../BlogPost/BlogPost";
import "./Testimonial.css";
SwiperCore.use([EffectCoverflow, Pagination]);
const Testimonial = () => {
  const [loading, setLoading] = useState(true);
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("getReview")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((error) => error.message);
  }, []);
  console.log("sdf", Reviews);

  return (
    <section id="reviews" className="testimonials p-md-3">
      <Fade bottom duration={2500} distance="40px">
        <div className="my-5 py-4">
          <div className="review-title text-center">
            <span>What Our Clients Says</span>
            <h2>Testimonials</h2>
          </div>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <CardDeck className="mt-5">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
              >
                {Reviews.map((mp) => (
                  <SwiperSlide>
                    <BlogPost mp={mp}></BlogPost>
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardDeck>
          )}
        </div>
      </Fade>
    </section>
  );
};

export default Testimonial;
