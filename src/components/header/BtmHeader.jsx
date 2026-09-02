import { useEffect, useState } from "react";
import { IoMdMenu ,IoIosArrowDown} from "react-icons/io";
import { Link } from "react-router";
import { GoSignIn } from "react-icons/go";
import { FaUserPlus } from "react-icons/fa";



const NavLinks= [
    {title: "Home" , link: '/'},
    {title: "About" , link: '/about'},
    {title: "Accessories" , link: '/accessories'},
    {title: "Blog" , link: '/blog'},
    {title: "Contact" , link: '/contact'},
]

function BtmHeader() {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then((res) =>res.json())
        .then((data) => setCategories(data))
    },[])

    console.log(categories)

  return (
    <div className="btm_header py-5 bg-blue-400 mt-4">
        <div className="container w-[95%] md:w-[80%] m-auto flex justify-between items-center">
            <nav className="nav w-[80%]">

                <div className="category_nav relative flex justify-between items-center">
                    <div className="category_btn flex items-center md:gap-3 md:w-[35%]">
                        <IoMdMenu className="text-xl "/>
                        <p className="font-bold md:text-lg text-sm hidden lg:block">Browse Category</p>
                        <IoIosArrowDown className="md:text-xl hidden lg:block"/>
                    </div>

                    <div className="category_nav_list flex flex-col gap-2 w-[220px] h-[500px] overflow-y-scroll absolute top-12 bg-gray-100 pt-2 hidden">
                        {categories.map((category)=>(
                             <Link to={category.slug} className="border-b-1 border-gray-300 pb-2 pl-3 cursor-pointer">{category.name}</Link>
                        ))}
                    </div>

                    <div className="nav_links flex gap-2 md:gap-10 items-center lg:w-[55%]">
                        {NavLinks.map((item)=>(
                            <Link to={item.link} className="hover:text-blue-800 font-bold md:text-lg text-sm">{item.title}</Link>
                        ))}
                       
                    </div>
                </div>
            </nav>
            <div className="sign_regs_icon flex justify-between items-center gap-2">
                <Link to="/"><GoSignIn className="md:text-xl"/></Link>
                <Link to="/"><FaUserPlus className="md:text-xl"/></Link>
            </div>
        </div>
    </div>
  )
}

export default BtmHeader
