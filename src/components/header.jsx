import logo from "../images/california.png";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";


const header = () => {
    return (
        <>
            <div className="flex w-[90%] m-auto justify-between py-5">
                <img src={logo} alt="" />
                <ul className="flex w-[40%] justify-evenly">
                    <li>all products</li>
                    <li>Solutions</li>
                    <li>ABOUT</li>
                    <li>Support</li>
                </ul>
                <div className="flex text-2xl gap-3">
                    <CiSearch />
                    <FiShoppingCart />
                </div>
            </div>
        </>
    );
}
export default header;