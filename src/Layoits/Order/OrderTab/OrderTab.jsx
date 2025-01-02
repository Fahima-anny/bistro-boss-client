/* eslint-disable react/prop-types */
import FoodCard from "../../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useState } from "react";


const OrderTab = ({items}) => {

const [currentPage, setCurrentPage] = useState(0)
const itemsPerPage = 6 ;
const numberOfPages = Math.ceil(items.length / itemsPerPage) ;
const currentItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
const pages = [...Array(numberOfPages).keys()];

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return (
//    <div className="grid md:grid-cols-3 gap-10 py-10">
  
//    </div>
<>

<Swiper
pagination={pagination}
modules={[Pagination]}
className="mySwiper "
onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
>
{
    pages.map((page, idx) => <SwiperSlide key={idx}>
        <div className="grid md:grid-cols-3 gap-10 py-10">
    {
           currentItems.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
       }
       </div>
    </SwiperSlide>)
}

</Swiper>
   <div className="text-center py-4 text-yellow-500">
   <p>Page {currentPage + 1} of {numberOfPages}</p>
 </div>

</>

    );
};

export default OrderTab;