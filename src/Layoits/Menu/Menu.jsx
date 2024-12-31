import { Helmet } from "react-helmet-async";
import CoverSection from "../../Shared/CoverSection/CoverSection";
import menuImg from "../../assets/menu/banner3.jpg"
import SectionTitle from "../../SectionTitle/SectionTitle";
import dessertImg from '../../assets/home/chef-service.jpg'
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PopularItems from "../Home/PopularItems";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

<CoverSection
img={menuImg}
title="our menu"
para="Would you like to try a dish?"
></CoverSection>

<div className="max-w-screen-xl mx-auto pb-10">
<PopularItems></PopularItems>
</div>
{/* <SectionTitle
heading="TODAY'S OFFER"
para="---Don't miss---"
></SectionTitle> */}


<CoverSection
img={dessertImg}
title="Desserts"
para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
></CoverSection>

<div className="max-w-screen-xl mx-auto pb-10">
<PopularItems></PopularItems>
</div>

        </div>
    );
};

export default Menu;