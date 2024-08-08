"use client";

import Hamburger from "hamburger-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center p-2  bg-orange-linear-200 rounded-lg shadow-md">
      
      <div className="items-center justify-start">
      <Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row gap-4">
          <div className="w-12 h-12 relative">
            <Image
              src="/images/profile.jpg"
              alt="profile image"
              className="rounded-full object-cover"
              layout="fill"
            />
          </div>

          <div className="flex flex-col">
            <span className="mr-4">Feri Lukmansyah</span>
            <span className="mr-4 text-gray-500">Web Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
