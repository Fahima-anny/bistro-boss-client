/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "../../MenuItem/MenuItem";
import CoverSection from "../CoverSection";


const MenuCategory = ({items, coverImg, title, para}) => {
    return (
        <div>
          { title &&  <CoverSection
img={coverImg}
title={title}
para={para}
></CoverSection>}
            <div className="grid md:grid-cols-2 gap-6 max-w-screen-xl mx-auto pt-16">
    {
    items.map( item => <MenuItem key={item._id} item={item}></MenuItem> )
    }
</div>
<div className="flex justify-center pt-7 pb-16">
<Link to={`/order/${title}`} > 
<button className="bg-base-200 mx-auto hover:bg-black border-b-4 py-2 px-4 rounded-lg text-yellow-500 border-yellow-500 duration-500 uppercase">Order Now</button>
</Link>
        </div>
        </div>
    );
};

export default MenuCategory;