/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {

const {name, image, price, recipe} = item ;

    return (
        <div className="card bg-base-200 rounded-none">
  <figure>
    <img
     className="w-full"
      src={image}
      alt="Shoes" />
  </figure>
  <p className="absolute bg-black text-white right-3 top-3 py-1 px-3 font-semibold">${price}</p>
  <div className="card-body">
    <h2 className="card-title text-center mx-auto">{name}</h2>
    <p className="text-gray-500">{recipe}</p>
    <div className="card-actions justify-center">
      <button className="bg-base-200 hover:bg-black border-b-4 py-2 px-4 rounded-lg text-yellow-500 border-yellow-500 duration-500 uppercase">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;