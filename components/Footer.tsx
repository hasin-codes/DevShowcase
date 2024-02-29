"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      
      <Link
        href="https://www.instagram.com/is_that_hasin_/"
        className="flex items-center text-sm font-medium text-gray-300 hover:text-slate-50 ease-in-out transition-all duration-500"

      >
        <span className="pr-2">Made by</span>
        
        <span className="pl-1 font-medium text-slate-200">Hasin Raiyan</span>
      </Link>
      
    </div>
  );
}

export default Footer;
