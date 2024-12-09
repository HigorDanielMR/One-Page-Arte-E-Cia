import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
    return(
        <>
            <div className="w-full h=20 bg-emerald-800 sticky top-0">
                <div className="flex justify-between items-center h-full">
                    <Logo/>
                    <ul>
                        <li>
                            <Link href="/about">
                                <p>About Us</p>
                            </Link>
                        </li>
                        <li>
                        <Link href="/services">
                            <p>Services</p>
                        </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <p>Contacts</p>
                            </Link>
                        </li>
                    </ul>
                    <Button />
                </div>
            </div>
        </>
    );
};

export default Navbar;