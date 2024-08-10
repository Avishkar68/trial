import React from "react";
import Data from "./Data";

const SearchData = ({googleData}) => {
  console.log("searchscreen",googleData);

  return (
    <>
      {googleData.length !== 0 ? (
        <div className="col-md-12 py-3 px-5 ml-1">
          <p className="small text-dark">
            All {googleData.searchInformation.formattedTotalResults} results
            found in {googleData.searchInformation.formattedSearchTime} sec
          </p>
          {googleData?.items.map((data, index) => (
            <Data key={index} data={data} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SearchData;
