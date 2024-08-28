import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiData } from "../Utils/RapidApi";
import Sidebar from "./Sidebar";
import SearchCardPage from "./SearchCardPage";

const Search = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  useEffect(() => {
    fetchSearchData();
  }, [searchQuery]);

  const fetchSearchData = () => {
    // beccase the data in the contents
    fetchApiData(`search/?q=${searchQuery}`).then(({ contents }) => {
      setResult(contents);
    });
  };
  return (
    <div className="">
      <div className="mt-24 flex flex-row h-[calc(100%-56px)]">
        <Sidebar />
        <div className="h-[calc(100vh-6.625rem)] scroll-container overflow-y-scroll overflow-x-hidden" >
          <div className="grid grid-cols-1  gap-2 p-2 ">
            {(result || []).map((item, index) => {
              if (item?.type !== "video") return null; // Return null to skip rendering
              return <SearchCardPage key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
