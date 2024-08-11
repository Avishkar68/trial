import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchHeader = ({ searchTerm , openVoiceSearch, setSearch }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+" ".*/.test(searchText)){
      setSearch(searchText)
      navigate("/search")
    }
  }
  const handleButton = () => {
    if(/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+" ".*/.test(searchText)){
      setSearch(searchText)

    }
  }

  const clearInput = () => {
    setSearchText("");
  }

  return (
    <div className="w-full py-2 d-flex align-items-center">
      <Link to={"/"} className="m-4">
        <img
          src="https://www.google.com/logos/doodles/2024/paris-games-breaking-6753651837110566-s.png"
          alt="Google logo here"
          height="30"
        />
      </Link>
      <div className="col-md-4 d-flex align-items-center justify-content-between border ml-2">
        <form style={{ width: "87%" }} onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchText}
            className="form-control boeder-0 mr-2 "
            onChange={(e) => setSearchText(e.target.value)}
            style={{ outline: "none", boxShadow: "none" }}
          />
        </form>

        {searchText ? <i className="fa fa-times " style={{cursor:"pointer"}} onClick={clearInput}></i> : null}

        <i className="fa fa-microphone " onClick={openVoiceSearch} style={{ cursor: "pointer" }}></i>
        <i className="fa fa-search " onClick={handleButton} style={{ cursor: "pointer" }}></i>
      </div>
      <ul className="nav ml-auto mr-5">
        <li className="nav-item">
          <a href="/" alt="apps" className="nav-link">
            <i className="fa fa-th" style={{ color: "#000" }}></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" alt="apps" className="nav-link">
            <i className="fa fa-user" style={{ color: "#000" }}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SearchHeader;
