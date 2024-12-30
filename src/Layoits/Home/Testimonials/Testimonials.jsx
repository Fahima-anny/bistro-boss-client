import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <div>
            <SectionTitle
                heading={"TESTIMONIALS"}
                para={"----What Our Client Says----"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">
            {
                reviews.map(review =>  <SwiperSlide key={review._id}>
                    <div className="space-y-3 text-center max-w-5xl mx-auto">
                        <p className="text-gray-500">{review.details}</p>
                        <h2 className="text-yellow-500 font-semibold text-2xl">{review.name}</h2>
                    </div>
                </SwiperSlide>)
            }
            </Swiper>

        </div>
    );
};

export default Testimonials;