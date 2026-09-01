import { useEffect, useState } from "react";
import { IoMdMenu ,IoIosArrowDown} from "react-icons/io";
import { Link } from "react-router";


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
    <div className="btm_header w-[80%] m-auto pt-5">
        <div className="container">
            <nav className="nav">

                <div className="category_nav">
                    <div className="category_btn flex items-center gap-3">
                        <IoMdMenu className="text-xl"/>
                        <p className="font-bold">Browse Category</p>
                        <IoIosArrowDown className="text-xl"/>
                    </div>

                    <div className="category_nav_list">
                        {categories.map((category)=>(
                             <Link to={category.slug}>{category.name}</Link>
                        ))}
                    </div>

                    <div className="nav_links">
                        {NavLinks.map((item)=>{
                             <Link to={item.link}>{item.title}</Link>
                        })}
                       
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default BtmHeader
