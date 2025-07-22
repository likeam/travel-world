"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 border-b border-gray-200">
      {" "}
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link href={"/"} className="flex items-center">
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
          <span className="text-2xl font-bold text-gray-800">
            Travel Planner
          </span>
        </Link>
        <div className=" flex items-center space-x-4">
          <>
            <Link href={"/"} className=" text-slate-900 hover:text-sky-500">
              My Trips
            </Link>
            <Link href={"/"} className=" text-slate-900 hover:text-sky-500">
              Globe
            </Link>
            <button className=" flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-sm cursor-pointer">
              Sign Out
            </button>
          </>

          <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-sm cursor-pointer">
            <span className="relative flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
