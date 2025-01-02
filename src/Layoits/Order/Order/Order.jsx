import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CoverSection from "../../../Shared/CoverSection/CoverSection";
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Components/Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const {count} = useLoaderData() ;
    const categories = ['pizza', 'soup', 'salad', 'desserts', 'drinks'] ;
    const {category} = useParams() ;
    const initialIndex = categories.indexOf(category)
const [tabIndex, setTabIndex] = useState(initialIndex) ;
const [menu] = useMenu() ;
console.log(category); 

const pizza = menu.filter(item => item.category === "pizza")
const dessert = menu.filter(item => item.category === "dessert")
const salad = menu.filter(item => item.category === "salad")
const soup = menu.filter(item => item.category === "soup")
const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>

<Helmet>
            <title>Bistro Boss | Order Food</title>
          </Helmet>

            <CoverSection
            img={orderCoverImg}
            title={'ORDER FOOD'}
            para={"Would you like to try a dish?"}
            ></CoverSection>

<div className="max-w-screen-xl mx-auto py-16">
<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
 
  <TabList className='uppercase flex justify-center text-xl font-medium border-b-none'>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Salad</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>

  <TabPanel>
<OrderTab count={count} items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab count={count} items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab count={count} items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab count={count} items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab count={count} items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
</div>

        </div>
    );
};

export default Order;