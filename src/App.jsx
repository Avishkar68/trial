import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Home from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import { searchData } from "./api/googleSearch";
import "./App.css";
import VoiceSearch from "./components/VoiceSearch";
import { recognition } from "./api/voiceRecognition";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [googleData, setGoogleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [voiceSearch, setVoiceSearch] = useState(false);

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

  const openVoiceSearch = () => {
    setVoiceSearch(true);
    recognition.start()
    recognition.onresult = (event) => {
      const {transcript} = event.results[0][0];
      console.log(transcript);
      
      if(transcript !== null || transcript !== "" || transcript !== " "){
        setSearchTerm(transcript)
        setVoiceSearch(false);
        console.log("if passed")
      }else{
        setVoiceSearch(false)
        alert("please try again")
      }
    }
  };
  const closeVoiceSearch = () => {
    setVoiceSearch(false);
    recognition.stop()
  };

  return (
    <div className="App">
      {voiceSearch ? <VoiceSearch closeVoiceSearch={closeVoiceSearch} /> : null}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home openVoiceSearch={openVoiceSearch} setSearch={setSearch} />
            }
          />
          <Route
            path="/search"
            element={
              <SearchScreen
                setSearch={setSearch}
                openVoiceSearch={openVoiceSearch}
                searchTerm={searchTerm}
                googleData={googleData}
                loading={loading}
                error={error}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
