import React from "react";
import { useLoaderData } from "react-router-dom";
import CountryList from "../components/country/CountryList";

function Destinations() {
  const countries = useLoaderData();
  return (
    <div>
      <div>
        <CountryList countries={countries} />
      </div>
    </div>
  );
}

export default Destinations;
