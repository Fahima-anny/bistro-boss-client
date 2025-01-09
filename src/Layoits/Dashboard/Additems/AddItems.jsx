import { useForm } from "react-hook-form";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const AddItems = () => {

const img_Host_Key = import.meta.env.VITE_IMAGE_HOST_API ;

const img_Hosting_Api = `https://api.imgbb.com/1/upload?key=${img_Host_Key}`

const axiosPublic = useAxiosPublic() ;

    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) => {
        console.log(data)
        const imgFile = {image: data.image[0]}
        // upload img on imgbb , then send to db 
        const res = await axiosPublic.post(img_Hosting_Api, imgFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        console.log(res.data);
        if(res.data.success){
            const menuItem = {
                name: data.name,
                price: parseFloat(data.price),
                recipe: data.recipe,
                category: data.category,
                image: res.data.data.display_url
            }
        }
    }

    return (
        <div>
        <SectionTitle
        heading="ADD AN ITEM"
        para="---What's new?---"
        ></SectionTitle>

<div className="bg-base-200 py-5 px-10 rounded-lg">
<form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-gray-600">Recipe Name*</span>
          </label>
          <input 
          {...register("name")}
          type="text"
           placeholder="Recipe Name"
            className="input  w-full" required />
        </div>

     <div className="py-3 flex gap-5">
     <div className="form-control w-full">
      <label className="label">
            <span className="label-text font-medium text-gray-600">Category*</span>
          </label>
      <select
      {...register("category")}
      required
      defaultValue="default"
      className="select w-full ">
  <option disabled value="default">Select a category</option>
  <option value="pizza">Pizza</option>
  <option value="salad">Salad</option>
  <option value="soup">Soup</option>
  <option value="dessert">Dessert</option>
  <option value="drinks">Drinks</option>
</select>
      </div>

      <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-gray-600">Price*</span>
          </label>
          <input 
          {...register("price")}
          type="text"
           placeholder="Recipe Name"
            className="input  w-full" required />
        </div>

     </div>

     <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-gray-600">Recipe Details*</span>
          </label>
            <textarea 
             placeholder="Recipe Details"
            required
             {...register("recipe")}
              className="textarea w-full" ></textarea>
        </div>

        <div className="form-control w-full py-6">
        <input type="file"
        required
         {...register("image")}
        className="file-input w-full" />
</div>

   <button className="btn btn-warning gap-2 bg-[#e8b160]">
    Add Item <FaUtensils></FaUtensils>
   </button>
    </form>
</div>

        </div>
    );
};

export default AddItems;