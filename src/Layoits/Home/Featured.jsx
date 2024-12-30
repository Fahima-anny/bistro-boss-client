import SectionTitle from "../../SectionTitle/SectionTitle";
import img from '../../assets/home/featured.jpg'
import "./Featured.css"

const Featured = () => {
    return (
        <div className=" featuredDiv bg-fixed my-20 text-white ">
              <div className="overlay">
             {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <SectionTitle
            heading="FROM OUR MENU"
            para="---Check it out---"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 justify-center items-center gap-16 pt-10 max-w-screen-xl mx-auto pb-20 ">
                <img src={img} alt="" />
                <div className="space-y-3">
<h3 className="text-xl font-medium">December 30, 2024</h3>
<h3 className="uppercase text-xl font-medium">Where can I get Some</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id repudiandae, impedit blanditiis molestiae perspiciatis? Rem molestias quisquam possimus labore!</p>
<button className="border-b-4 py-2 px-4 rounded-b-lg border-white hover:text-yellow-500 hover:border-yellow-500 duration-500">Read More</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Featured;