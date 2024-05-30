import React from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col text-[#737373] px-14 md:px-28 lg:px-40 xl:px-64 mt-14 border-t border-gray-700 my-10 pt-10">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-4">
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            FAQ
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Investor Relations
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Privacy
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Speed Test
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Help Centre
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Jobs
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Cookie Preferences
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Legal Notices
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Account
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Ways to Watch
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Corporate Information
          </li>
          <li className=" md:mr-4 hover:underline cursor-pointer text-xs font-medium flex w-full items-center">
            Only on{" "}
            <Link
              href="/"
              className="flex justify-center items-center w-28 md:w-32 text-xs font-extrabold text-center"
            >
              <div className="bg-primary py-1 px-2 border border-primary text-black">
                <p>MOVIE</p>
              </div>
              <div className="border border-primary py-1 text-primary px-2 ">
                <p>APP</p>
              </div>
            </Link>
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Media Centre
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Terms of Use
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            {" "}
            <a href="https://www.linkedin.com/in/amanprakash11/">
              Contact Us
            </a>{" "}
          </li>
        </ul>
        
      </div>

      <div className="h-9 py-1 text-white text-center bg-[#333333]">
        For Educational Purposes Only
      </div>
    </div>
  );
};

export default Footer;
