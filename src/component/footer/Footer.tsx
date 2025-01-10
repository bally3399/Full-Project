import React from "react";
import Link from "next/link";
import {FaFacebook, FaTwitter, FaInstagram, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white py-8 mt-28">
            <div className="container mx-auto px-4 ">
                <div className="flex justify-around items-center gap-4">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">About</h2>
                        <Link href="/about">
                            <div className="text-white hover:text-blue-300 mb-2 block">About</div>
                        </Link>
                        <p className="text-white">Soft Touch</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                        <ul>
                            <li className="mb-1">
                                <Link href="/">
                                    <div className="text-white hover:text-blue-300">Home</div>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/pricing">
                                    <div className="text-white hover:text-blue-300">Pricing</div>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/contact">
                                    <div  className="text-white hover:text-blue-300">Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Follow</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-blue-300">
                                <FaFacebook size="1.5em" />
                            </a>
                            <a href="#" className="text-white hover:text-blue-300">
                                <FaTwitter size="1.5em" />
                            </a>
                            <a href="https://www.instagram.com/soft_touch__357/profilecard/?igsh=MWgyaDVtc283NmdndA==" className="text-white hover:text-blue-300">
                                <FaInstagram size="1.5em" />
                            </a>
                            <a href="wa.me/2348117977661">
                                <FaWhatsapp size='1.5em'/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-white mt-8">
                    Soft Touch &copy; All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
