import React from "react";

const ListItem = () => {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indiang soap opera",
    "Cricket",
    "Football",
    "Akash9799 vlog",
  ];
  return (
    <div className="flex overflow-x-scroll scroll-container px-4">
      <div className="flex space-x-4 flex-nowrap">
      {categories.map((category) => {
        return (
          <div
            key={category}
            className=" flex-none  bg-gray-200 py-2 px-4 rounded-xl hover:bg-gray-300 duration-300 font-semibold text-black text-sm cursor-pointer"
          >
            {category}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ListItem;
