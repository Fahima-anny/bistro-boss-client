/* eslint-disable react/prop-types */

const SectionTitle = ({para, heading}) => {
    return (
        <div className="text-center mx-auto max-w-sm my-10">
            <p className="italic text-yellow-500">{para}</p>
            <h2 className="text-3xl py-3 border-y-4 font-medium border-y-gray-200 mt-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;