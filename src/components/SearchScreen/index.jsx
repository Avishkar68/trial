import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SearchData from "./searchData/index";

const SearchScreen = ({ searchTerm, googleData, loading, error , openVoiceSearch ,setSearch }) => {
  const navigate = useNavigate();
  console.log("Search screen ", googleData);

  useEffect(() => {
    if (searchTerm === "") {
      navigate("/");
    }
  }, [searchTerm, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header openVoiceSearch={openVoiceSearch}  searchTerm={searchTerm} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <SearchData googleData={googleData} />
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
