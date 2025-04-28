"use client";
import React from "react";
import "./globals.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Shortener from './Shortener/page'

const page = () => {
  const { data: session } = useSession();
  if(!session){
  return (
    <>
      <section>
        <div className="py-8 sm:px-6 sm:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
            <div className="h-72 z-0 sm:h-80 lg:order-last lg:h-full">
              <DotLottieReact
                src="https://lottie.host/dfc59d3e-a031-42d3-bde1-a1574883893d/3k56EA5g2n.lottie"
                loop
                autoplay
              />
            </div>

            <div className="lg:py-20 width z-10">
              <h2 className="text-3xl text-blue-700 font-bold sm:text-4xl">
                Easily shorten long URLs and share them instantly with anyone,
                anywhere, anytime.
              </h2>

              <p className="mt-2 text-gray-500">
                Simplify your links for cleaner sharing on social media, emails,
                and beyond.
              </p>
              <p className="text-gray-500">
                No signup needed—just paste your URL and go!
              </p>
              <p className="text-gray-500">
                Fast, reliable, and 100% free to use.
              </p>

              <button onClick={() => signIn("")} className="outline-none mt-5 group relative inline-block overflow-hidden border border-blue-700 px-8 py-1 focus:ring-3 focus:outline-hidden">
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
                  <span className="relative text-sm font-medium text-blue-700 transition-colors group-hover:text-white">
                    Try Now
                  </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {
          `
          @media only screen and (min-width: 875px) {
          .width{
            width:850px;
          }
          }
          `
        }
      </style>
    </>
  );
}
return(
<>
<Shortener/>
</>
)
};

export default page;
