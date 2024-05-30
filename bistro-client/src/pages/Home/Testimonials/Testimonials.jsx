import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    // fetch(`http://localhost:5000/reviews`)
    //   .then((res) => res.json())
    //   .then((data) => setReviews(data));
    const testimonial = async () => {
      const { data } = await axiosPublic("/reviews");
      setReviews(data);
    };
    testimonial();
  }, [axiosPublic]);

  return (
    <div>
      <SectionTitle subHeading="What Our Clients Say" heading="Testimonials" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-6xl my-10" />
                <p>{review.details}</p>
                <h3 className="text-2xl text-yellow-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
