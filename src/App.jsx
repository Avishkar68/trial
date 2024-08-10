import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import { searchData } from "./api/googleSearch";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [googleData, setGoogleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setSearch = async (term) => {
    setSearchTerm(term);
    setLoading(true);
    setError(null);
    try {
      const data = await searchData(term);
      setGoogleData(data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (googleData) {
      console.log("setdata", googleData);
    }
  }, [googleData]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setSearch={setSearch} />} />
          <Route
            path="/search"
            element={<SearchScreen searchTerm={searchTerm} googleData={googleData} loading={loading} error={error} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
