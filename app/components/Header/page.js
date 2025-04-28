"use client"
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  if(!session){
  return (
    <header className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-light">URL SHORTENER</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href='/' className="mr-5 hover:text-blue-700">Home</Link>
          <Link href='/' className="mr-5 hover:text-blue-700">About</Link>
          <Link href='/' className="mr-5 hover:text-blue-700">Contact Us</Link>
        </nav>
        <button onClick={() => signIn("")} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Try Now
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
return(
  <>
  <header className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto justify-between flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 font-light">URL SHORTENER</span>
        </a>
        <p className="text-center text-gray-300 text-2xl">Welcome, {session.user.name}</p>
        <button
            className="rounded-md float-right bg-red-400 cursor-pointer px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            onClick={() => signOut()}>Sign out</button>
      </div>
    </header>
  </>
)
};

export default page;
