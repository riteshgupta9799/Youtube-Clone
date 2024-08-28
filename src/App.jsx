import Navbar from "./Component/Navbar"
import Sidebar from "./Component/Sidebar"
import { useAuth } from "./ContextApi/AuthProvider";
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home'
import Search from './Component/Search'
import PlayingVideo from './Component/PlayingVideo'
import LoadingPage from "./Loader/LoadingPage";



function App() {
  const {loading,data}=useAuth();
  console.log(data);
  console.log(loading);
  return (
    <div>
      {loading && <LoadingPage />}
    <Navbar />
    {/* <Sidebar /> */}
    <Routes>
      <Route  path="/" element={<Home /> } />
      <Route path="/search/:searchquery" element={<Search /> } />
      <Route path="/video/:id" element={<PlayingVideo /> } />
    </Routes>

    </div>
  )
}

export default App
