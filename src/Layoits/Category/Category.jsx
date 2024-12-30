
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../../SectionTitle/SectionTitle';

const Category = () => {
    return (
       <div>

<SectionTitle
para={"---From 11:00am to 10:00pm---"}
heading={"ORDER ONLINE"}
></SectionTitle>

         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='-mt-16 uppercase mb-8 text-4xl font-semibold text-center text-white'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='-mt-16 uppercase mb-8 text-4xl font-semibold text-center text-white'>pizza</h3>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='-mt-16 uppercase mb-8 text-4xl font-semibold text-center text-white'>Soup</h3>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='-mt-16 uppercase mb-8 text-4xl font-semibold text-center text-white'>dessert</h3>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='-mt-16 uppercase mb-8 text-4xl font-semibold text-center text-white'>Salad</h3>
        </SwiperSlide>
      </Swiper>
       </div>
    );
};

export default Category;