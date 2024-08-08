"use client";

import Hamburger from "hamburger-react";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "@/components/Navbar"; // Adjust the import path as needed

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row lg:flex-row-reverse justify-between items-center p-2 bg-orange-linear-200 rounded-lg shadow-md">
        <div className="items-center justify-start lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
        <div className="flex justify-end">
          <div className="flex flex-row gap-4 items-center">
            <div className="relative w-12 h-12">
              <Image
                src="/images/profile.jpg"
                alt="profile image"
                className="rounded-full"
                fill
                objectFit="cover"
              />
            </div>
            <div className="hidden lg:flex flex-col text-right">
              <span className="mr-4">Feri Lukmansyah</span>
              <span className="mr-4 text-gray-500">Web Developer</span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Navbar />}
    </div>
  );
};

export default Header;
