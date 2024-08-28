import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { useSidebar } from "../ContextApi/SidebarContext";

const Sidebar = () => {
  const sidebarItems = [
    {
      groupName: "",
      groupItems: [
        { id: 1, icon: <GoHome />, name: "Home" },
        { id: 2, icon: <SiYoutubeshorts />, name: "Shorts" },
        { id: 3, icon: <MdOutlineSubscriptions />, name: "Subscriptions" },
      ],
    },
    {
      groupName: "You",
      groupItems: [
        { id: 1, icon: <GoHome />, name: "Your channel" },
        { id: 2, icon: <MdHistory />, name: "History" },
        { id: 3, icon: <MdOutlineSubscriptions />, name: "Playlist" },
        { id: 4, icon: <BiVideo />, name: "Your videos" },
        { id: 5, icon: <MdOutlineWatchLater />, name: "Watch Later" },
        { id: 6, icon: <AiOutlineLike />, name: "Liked videos" },
      ],
    },
    {
      groupName: "Explore",
      groupItems: [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <IoGameControllerOutline />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <SiStylelint />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <PiLightbulbLight />,
        },
        {
          id: 11,
          name: "Padcasts",
          icon: <MdPodcasts />,
        },
      ],
    },
    {
      groupName: "More From Youtube",
      groupItems: [
        {
          id: 1,
          name: "Youtube Premium",
          icon: <FaYoutube />,
        },
        {
          id: 2,
          name: "Youtube Studio",
          icon: <SiYoutubestudio />,
        },
        {
          id: 3,
          name: "Youtube Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Youtube Kids",
          icon: <SiYoutubekids />,
        },
      ],
    },
    {
      groupName: "",
      groupItems: [
        { id: 1, icon: <GoHome />, name: "Setting" },
        { id: 2, icon: <SiYoutubeshorts />, name: "Report History" },
        { id: 3, icon: <MdOutlineSubscriptions />, name: "Help" },
        { id: 4, icon: <MdOutlineSubscriptions />, name: "Send feedback" },
      ],
    },
  ];

  const { isSidebar, setIsSidebar, mobileShowSidebar, setMobileShowSiderbar } =
    useSidebar();

    const ModelOverlay = ()=>{
      return (
        <div className="flex fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-index-30" onClick={()=>setMobileShowSiderbar(!mobileShowSidebar)}>
          </div>
      )
    }
  return (
    <>
    <div className={`${mobileShowSidebar ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]" : "hidden h-[calc(100vh-6.625rem)] w-[30%]"} xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
      {/* home */}
      <div className="space-y-2 items-center ">
        {sidebarItems.map((group) => {
          return (
            <div className="mb-5">
              <h1>{group.groupName}</h1>
              {group.groupItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center space-x-6 hover:bg-gray-200 rounded-xl duration-300 p-1 my-3"
                  >
                    <div className="text-xl cursor-pointer">{item.icon}</div>
                    <span className="cursor-pointer">{item.name}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      <span className="text-xs font-semibold text-gray-600">
        About Press Copyright <br /> Contact us Creator <br /> Advertise
        Developers <br /> <br />
        <p>
          Terms Privacy Policy & Safety <br /> How YouTube works <br />
          Test new features
        </p>
      </span>
      <br />
      <p className="text-xs mt-1 text-gray-600 font-semibold">
        © 2024 Google LLC
      </p>
    </div>
    {mobileShowSidebar ? <ModelOverlay /> :null}
    </>
  );
};

export default Sidebar;
