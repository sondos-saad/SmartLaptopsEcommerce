import { useEffect, useState } from "react";
import { IoMdMenu ,IoIosArrowDown} from "react-icons/io";
import { Link, useLocation } from "react-router";
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
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const [toggleNavList, setToggleNavList] = useState(false)

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then((res) =>res.json())
        .then((data) => setCategories(data))
    },[])

    console.log(categories)

    const showOrHideNavList =()=>{
        setToggleNavList(!toggleNavList)
    }

  return (
    <div className="btm_header py-2 bg-blue-400 mt-4">
        <div className="container w-[95%] md:w-[80%] m-auto flex justify-between items-center">
            <nav className="nav w-[80%]">

                <div className="category_nav relative flex justify-between items-center cursor-pointer" onClick={showOrHideNavList}>
                    <div className="category_btn flex items-center md:gap-3 md:w-[35%]" >
                        <IoMdMenu className="text-xl text-white"/>
                        <p className="font-medium md:text-lg text-sm hidden lg:block text-white">Browse Category</p>
                        <IoIosArrowDown className="md:text-xl hidden lg:block text-white"/>
                    </div>

                            {toggleNavList && (
                                    <div className="category_nav_list flex flex-col gap-2 w-55 h-125 overflow-y-scroll absolute top-12 bg-gray-100 pt-2  ">
                                    {categories.map((category)=>(
                                        <Link to={category.slug} key={category.slug} className="border-b border-gray-300 pb-2 pl-3 cursor-pointer hover:bg-gray-200">{category.name}</Link>
                                    ))}
                                </div>
                            )}
                   

                    <div className="nav_links flex gap-2 md:gap-10 items-center lg:w-[55%]">
                        {NavLinks.map((item) => (
                            <li className="list-none" key={item.link}>
                                <Link to={item.link} className={`hover:text-blue-800 duration-300 font-medium md:text-lg text-sm ${location.pathname === item.link ? "text-blue-950" : "text-white"}`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
            </nav>
            <div className=" flex justify-between items-center gap-2">
                <Link to="/"><GoSignIn className="md:text-xl text-white"/></Link>
                <Link to="/"><FaUserPlus className="md:text-xl text-white"/></Link>
            </div>
        </div>
    </div>
  )
}

export default BtmHeader
