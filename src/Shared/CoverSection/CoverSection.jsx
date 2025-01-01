/* eslint-disable react/prop-types */

import { Parallax } from 'react-parallax';


const CoverSection = ({img, title, para}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
   <div
        className="hero min-h-[85vh]">
        <div className="hero-overlay bg-black bg-opacity-60  h-[50vh] w-[65vw]"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl font-serif text-white">
            <h1 className="mb-5 text-6xl font-bold uppercase ">{title}</h1>
            <p className="mb-5">
             {para}
            </p>
          </div>
        </div>
      </div>
    </Parallax>

      
    );
};

export default CoverSection;