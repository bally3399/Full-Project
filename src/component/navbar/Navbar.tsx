import styles from "@/component/styles.module.css";
import {useState} from "react";
import {HiMenu} from "react-icons/hi";
import {AiOutlineShoppingCart} from "react-icons/ai";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.nav} >
            <div className='flex gap-3 items-center mb-4'>
                <h1>🪡</h1>
                <p className='text-[#daa520]'>SOFT TOUCH</p>
            </div>

            <div className='right-0 hidden md:flex space-x-6 text-[#daa520]'>
                <div>HOME</div>
                <div>NEW COLLECTION</div>
                <AiOutlineShoppingCart/>
            </div>
            <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                    onClick={() => setMenuOpen(!menuOpen)}/>

            {menuOpen && (
                <ul className='md:hidden absolute z-10 top-16 left-0 w-full bg-white shadow-md text-lg'>
                    <div className='hover:text-blue-300 cursor-pointer p-4 text-black'>Home</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Features</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Blog</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>About us</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Contact us</div>
                </ul>
            )}
        </nav>
    )
}
export default Navbar;
