import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flag, name, nativeName, capital, population, region, area} = props.country;
    return (
        <div className='country'>
            <img src={flag} alt="" />
            <h4>Name: {name}</h4>
            <p>Native Name: {nativeName}</p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;