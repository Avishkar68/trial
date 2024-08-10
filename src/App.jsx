import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/HomeScreen";
import "./App.css";
import SearchScreen from "./components/SearchScreen";
import { searchData } from "./api/googleSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) => {
    setSearchTerm(term);
    const data = await searchData(term)
    setGoogleData(data)
  };
  useEffect(()=>{
    console.log("setdata",googleData);
  },[googleData])
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setSearch={setSearch}  />} />
          <Route
            path="/search"
            element={<SearchScreen searchTerm={searchTerm} googleData={googleData}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
