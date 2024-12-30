/* eslint-disable react/prop-types */


const MenuItem = ({item}) => {

const {name, image, price, recipe} = item ;

    return (
        <div className="flex gap-3 duration-500 hover:shadow-md py-3">
            <img
            className="w-[100px] rounded-b-full rounded-tr-full"
            src={image} alt="" />
            <div>
                <h3 className="uppercase text-lg font-medium">{name}---------</h3>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <h4 className="text-yellow-500">${price}</h4>
        </div>
    );
};

export default MenuItem;