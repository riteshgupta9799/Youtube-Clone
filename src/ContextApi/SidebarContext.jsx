import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [mobileShowSidebar, setMobileShowSiderbar] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebar,
        setIsSidebar,
        mobileShowSidebar,
        setMobileShowSiderbar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar =()=>{ 
    const sidebarContext = useContext(SidebarContext);
    if(!sidebarContext){
        return null;
    }
    else{
        return sidebarContext;
    }

}
