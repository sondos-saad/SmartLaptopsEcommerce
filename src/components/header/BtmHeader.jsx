import { IoMdMenu ,IoIosArrowDown} from "react-icons/io";

function BtmHeader() {
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

                    <div className="category_nav_list"></div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default BtmHeader
