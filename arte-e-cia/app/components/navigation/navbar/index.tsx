import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
<<<<<<< HEAD
        <div className="w-full h-25 bg-black sticky top-0">
=======
        <div className="w-full h-25 bg-transparent sticky top-0">
>>>>>>> 2e2481ea93eed0812e3b3d38cd5af56641f8e0b4
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <Logo />
                    <ul className="hidden md:flex gap-x-6 text-white">
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