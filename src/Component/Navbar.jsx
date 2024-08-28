import React, { useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from "../../public/Ritesh.jpeg";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../ContextApi/SidebarContext";
import { IoMdArrowRoundBack } from "react-icons/io";

const Navbar = () => {
  const { isSidebar, setIsSidebar, mobileShowSidebar, setMobileShowSiderbar } =
    useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    e.preventDefault();
    if (
      e?.key === "Enter" ||
      (e === "searchButton" && searchQuery?.length > 0)
    ) {
      navigate(`search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShowSiderbar(!mobileShowSidebar);
    }
    setIsSidebar(!isSidebar);
  };

  const [searchbar, setSearchBar] = useState(false);
  if (searchbar) {
    return (
      <div className="flex   items-center justify-between px-6 py-2 fixed w-[100%] bg-white top-0">
        <IoMdArrowRoundBack size={20} onClick={()=>setSearchBar(!searchbar)} />
        <div className=" flex flex-grow  items-center mx-4">
          <div className="w-[100%] px-4 py-2 border-gray-300 rounded-l-full border">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              className="outline-none "
            />
          </div>
          <button
            className="px-4 py-2 border-gray-300 border rounded-r-full bg-gray-100"
            onClick={(e) => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
        </div>
          <IoMdMic
            size={"42px"}
            className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-100 duration-200"
          />
      </div>
    );
  }

  return (
    <div className="flex justify-between px-6 py-2 fixed w-[100%] bg-white top-0">
      <div className=" space-x-4  flex items-center">
        <AiOutlineMenu
          className="text-xl cursor-pointer"
          onClick={handleSidebar}
        />

        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className=" md:flex hidden  w-[35%] items-center">
        <div className="w-[100%] px-4 py-2 border-gray-300 rounded-l-full border">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            className="outline-none "
          />
        </div>
        <button
          className="px-4 py-2 border-gray-300 border rounded-r-full bg-gray-100"
          onClick={(e) => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-100 duration-200"
        />
      </div>
      <div className=" flex space-x-5 items-center">
        <CiSearch
          className="text-2xl xl:hidden"
          onClick={() => setSearchBar(!searchbar)}
        />
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
