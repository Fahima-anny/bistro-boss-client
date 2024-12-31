import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Banner from "./Banner";
import Featured from "./Featured";
import PopularItems from "./PopularItems";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="">
          <Helmet>
            <title>Bistro Boss | Home</title>
          </Helmet>
          <Banner></Banner>
          <div className="max-w-screen-xl mx-auto">
            <Category></Category>
            <PopularItems></PopularItems>
          </div>
          <Featured></Featured>
          <div className="max-w-screen-xl mx-auto">
            <Testimonials></Testimonials>
          </div>
        </div>
    );
};

export default Home;