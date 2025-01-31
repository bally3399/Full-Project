import styles from "@/component/styles.module.css";
import React, {useState} from "react";
import {HiMenu} from "react-icons/hi";
import { Icon } from "@iconify/react";
import Badge from '@mui/material/Badge';





const Navbar = () => {

    const CartBadge = () => (
        <Badge color="secondary" showZero overlap="circular">
            <Icon icon="carbon:shopping-cart" width={30} height={30}/>
        </Badge>
    );


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
                <CartBadge/>
            </div>
            <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-yellow-800"
                    onClick={() => setMenuOpen(!menuOpen)}/>

            {menuOpen && (
                <ul className='md:hidden absolute z-10 top-16 left-0 w-full bg-black shadow-md text-lg'>
                    <div className='hover:text-yellow-800 cursor-pointer p-4 text-[#daa520]'>Home</div>
                    <div className='hover:text-yellow-800 cursor-pointer p-4 text-[#daa520]'>Features</div>
                    <div className='hover:text-yellow-800 cursor-pointer p-4 text-[#daa520]'>Blog</div>
                    <div className='hover:text-yellow-800 cursor-pointer p-4 text-[#daa520]'>About us</div>
                    <div className='hover:text-yellow-800 cursor-pointer p-4 text-[#daa520]'>Contact us</div>
                </ul>
            )}
        </nav>
    )
}
export default Navbar;
