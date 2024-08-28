import { createContext, useContext, useEffect, useState } from "react";
import { fetchApiData } from "../Utils/RapidApi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = (query) => {
    setLoading(true);
    fetchApiData(`search/?q=${query}`).then(({contents}) => {
      setData(contents);
      console.log(contents);
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
