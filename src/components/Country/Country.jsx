
import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)


    const handleVisited = () => {
        setVisited(!visited);
    }
  
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'red' }}>Name: {name.common}</h3>
            <img src={flags.png} alt="picture of the national flags" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <br />
            <br />
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <br />
            {visited ? 'I have visited this country' : 'I want to visit'}

        </div>
    );
};

export default Country;