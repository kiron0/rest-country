import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags, name, nativeName, capital, population, region, area} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" className='mb-4'/>
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