import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        console.log(country);
        const newArray =[...visitedCountries,country];
        setVisitedCountries(newArray);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <div>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
                <div>
                    {
                        visitedCountries.map(country => <img className="image-handler" key={country.cca3} src={country.flags.png}></img>)
                    }
                </div>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;