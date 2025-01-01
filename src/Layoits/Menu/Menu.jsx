import { Helmet } from "react-helmet-async";
import CoverSection from "../../Shared/CoverSection/CoverSection";
import menuImg from "../../assets/menu/banner3.jpg"
import useMenu from "../../Components/Hooks/useMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuCategory from "../../Shared/CoverSection/MenuCategory/MenuCategory";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu] = useMenu() ;
    const offered = menu.filter(item => item.category === "offered")
    const pizza = menu.filter(item => item.category === "pizza")
    const dessert = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")

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
    
    {/* main banner  */}
<SectionTitle
heading="TODAY'S OFFER"
para="---Don't miss---"
></SectionTitle>

{/* offered  */}
<MenuCategory
items={offered}
></MenuCategory>

</div>

{/* desserts  */}
<MenuCategory
title={"desserts"}
para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
items={dessert}
coverImg={dessertImg}
></MenuCategory>

{/* pizza  */}
<MenuCategory
title={"pizza"}
para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
items={pizza}
coverImg={pizzaImg}
></MenuCategory>

{/* salad  */}
<MenuCategory
title={"salad"}
para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
items={salad}
coverImg={saladImg}
></MenuCategory>

{/* soup  */}
<MenuCategory
title={"soup"}
para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
items={soup}
coverImg={soupImg}
></MenuCategory>






        </div>
    );
};

export default Menu;