import { Link } from "react-router"
import { FaSearch, FaRegHeart ,FaShoppingCart} from "react-icons/fa";

function TopHeader() {
  return (
    <div className="top_header w-[95%] md:w-[80%] m-auto pt-2">
        <div className="container flex items-center justify-between py-0 ">
            <Link to='/' className="font-bold text-[32px]">LoGo</Link>

            <form action='' className="search_box border border-blue-400 rounded-full w-[200px] md:w-[500px] flex justify-between items-center">
                <input type="text" name="search" id="search" placeholder="Search For Products" className="w-[80%] md:w-[90%] border-none focus:border-none h-45px py-2 focus:outline-0 px-5"/>
                <button type="submit" className="bg-blue-400 p-3 rounded-tr-[20px] rounded-br-[20px] w-[20%] md:w-[10%] flex justify-center items-center"><FaSearch /></button>
            </form>

            <div className="header_icons flex items-center gap-4">
                <div className="icon flex items-center cursor-pointer">
                    <FaRegHeart className="text-xl"/>
                    <span className="count mt-[-16px] ml-[-8px] bg-red-800 text-white p-1 rounded-full text-[12px] w-[20px] h-[20px] flex justify-center items-center ">0</span>
                </div>
                <div className="icon flex items-center cursor-pointer">
                    <FaShoppingCart className="text-xl"/>
                    <span className="count mt-[-16px] ml-[-8px] bg-red-800 text-white p-1 rounded-full text-[12px] w-[20px] h-[20px] flex justify-center items-center ">0</span>
                </div>
            </div>
        </div>
     
     
    </div>
  )
}

export default TopHeader

