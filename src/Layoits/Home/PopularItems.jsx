import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../Components/Hooks/useMenu";


const PopularItems = () => {

const [menu] = useMenu() ;
const popular = menu.filter(item => item.category === "popular")

// const [menu, setMenu] = useState([]) ;
// useEffect(() => {
//     fetch('menu.json')
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data);
//         const popular = data.filter(d => d.category === "popular")
//         setMenu(popular) ;
//     })
// } , [])

    return (
        <div className="pt-10">
            <SectionTitle
            heading="FROM OUR MENU"
            para="---Check it out---"
            ></SectionTitle> 

<div className="grid md:grid-cols-2 gap-6">
    {
    popular.map( item => <MenuItem key={item._id} item={item}></MenuItem> )
    }
</div>

        </div>
    );
};

export default PopularItems;