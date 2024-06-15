import React, { useState } from "react";
import './transport.css';
import jsonData from '../transportJSON.json';

const Transport = () => {
  // State to hold search criteria and results
  const [searchCriteria, setSearchCriteria] = useState({ from: "", to: "" });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Filter the JSON data based on search criteria
    const results = jsonData.filter(item =>
      item.from === searchCriteria.from && item.to === searchCriteria.to
    );
    setSearchResults(results);
  };

  return (
    <div className="middle_transport1111">
      <div className="container_transport">
        <div className="con1">
          <div>
            <center>
              <h1>Bus Enquiry</h1>
            </center>
            <form>
              <center>
                <input type="date" id="travelDate" placeholder="Date" />
              </center>
              <center>
                <select
                  id="from"
                  name="from"
                  onChange={(e) => setSearchCriteria({ ...searchCriteria, from: e.target.value })}
                >
                  <option value="">Select Departure</option>
                  {Array.from(new Set(jsonData.map(item => item.from))).map((fromCity, index) => (
                    <option key={index} value={fromCity}>{fromCity}</option>
                  ))}
                </select>

                <span id="reverse">&#8596;</span>

                <select
                  id="to"
                  name="to"
                  onChange={(e) => setSearchCriteria({ ...searchCriteria, to: e.target.value })}
                >
                  <option value="">Select Destination</option>
                  {Array.from(new Set(jsonData.map(item => item.to))).map((toCity, index) => (
                    <option key={index} value={toCity}>{toCity}</option>
                  ))}
                </select>
              </center>
              <center>
                <button type="button" id="searchButton" onClick={handleSearch}>Search Buses</button>
              </center>
            </form>
          </div>
          <div id="busList">
            {/* Render the search results */}
            {searchResults.length > 0 ? (
              searchResults.map((item, i) => (
                <div key={i} className="bus-detail-container">
                  <h2>Route: {item.from} to {item.to}</h2>
                  <p>Route No: {item.route_no_}</p>
                  <p>Type: {item.type}</p>
                  <p>Departure Timings: {item.departure_timings}</p>
                  <p>Route Length: {item.route_length} km</p>
                  <p>No of Services: {item.no_of_service}</p>
                  {/* <img src={item.image_url} alt={`Bus from ${item.from} to ${item.to}`} /> */}
                </div>
              ))
            ) : (
              <p>Atleast should be TIRUPATHI as from or to location.</p>
            )}
          </div>
          <div id="error-message"></div>
        </div>
        <div className="con2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/YX68ULW.jpg" alt="Bus" />
        </div>
      </div>
    </div>
  );
};

export default Transport;
