import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Info = ({ countryCode }) => {
  const [selectedCountry, setSelectedCountry] = useState({ cca2: "" });

  useEffect(() => {
    fetchData(countryCode);
  }, [countryCode]);

  const fetchData = async (countryCode) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      setSelectedCountry(response.data[0]);
    } catch (error) {
      console.error("Error fetching country data", error);
    }
  };

  return (
    <div className="info-container">
      {selectedCountry.cca2.trim() ? (
        <div>
          <h2>
            {selectedCountry.name.common} {selectedCountry.flag}
          </h2>
          <h3>Languages</h3>
          {selectedCountry.languages ? (
            <ul>
              {Object.keys(selectedCountry.languages).map((language, index) => {
                return (
                  <li key={index}>{selectedCountry.languages[language]}</li>
                );
              })}
            </ul>
          ) : (
            <p>No languages</p>
          )}
          <h3>
            Currency:{" "}
            {
              selectedCountry.currencies[
                Object.keys(selectedCountry.currencies)[0]
              ].name
            }{" "}
            (
            {
              selectedCountry.currencies[
                Object.keys(selectedCountry.currencies)[0]
              ].symbol
            }
            )
          </h3>
        </div>
      ) : (
        <p>Select a country</p>
      )}
    </div>
  );
};

export default Info;
