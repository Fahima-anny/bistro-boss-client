import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularItems = () => {

const [menu, setMenu] = useState([]) ;

useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const popular = data.filter(d => d.category === "popular")
        setMenu(popular) ;
    })
} , [])

    return (
        <div className="">
            <SectionTitle
            heading="FROM OUR MENU"
            para="---Check it out---"
            ></SectionTitle> 

<div className="grid md:grid-cols-2 gap-6">
    {
    menu.map( item => <MenuItem key={item._id} item={item}></MenuItem> )
    }
</div>

        </div>
    );
};

export default PopularItems;