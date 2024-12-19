import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
        <div className="w-full h-25 bg-black sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <Logo />
                    <ul id="nav" className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/about">
                            <p>Sobre Nós</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                            <p>Produtos</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                            <p>Contatos</p>
                            </Link>
                        </li>
                    </ul>
                    <Button />
                </div>
            </div>
        </div>
    </>
  );
};

export default Navbar;