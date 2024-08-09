import React, { useState, useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = ({setSearch}) => {
  const navigate = useNavigate()
  const [input, setinput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    if(/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)){
      setSearch(input)
      navigate("/search")
    }
  }
  const handleButton = () => {
    if(/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)){
      setSearch(input)
      navigate("/search")

    }
  }

  const clearInput = () => {
    setinput("");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center  mt-5">
          <img
            src="https://www.google.com/logos/doodles/2024/paris-games-rings-6753651837110531-la202124.gif"
            alt="Google icon"
            className="mx-auto my-3"
          />
          <div className="formDiv col-md-5 mx-auto border rounded  my-5 d-flex align-items-center justify-content-between py-1">
            <i className="fa fa-search mx-2"></i>
            <form style={{ width: "100%" }} className="mx-1" onSubmit={handleSubmit} >
              <input
                type="text"
                className="form-control border-0 "
                value={input}
                onChange={(e) => setinput(e.target.value)}
                style={{boxShadow: "0 !important",outline:"none !important"}}
              />
            </form>
            {input ? <i className="fa fa-times mx-1" style={{cursor:"pointer"}} onClick={clearInput}></i> : null}
            <button type="buton" className="btn">
              <i className="fa fa-microphone mx-1"></i>
            </button>
          </div>
          <div className="btns mx-auto text-center">
                <button type="button" className="btn btn-default mx-1" onClick={handleButton}>Google Search</button>
                <button type="button" className="btn btn-default mx-1">Feeling Lucky</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
